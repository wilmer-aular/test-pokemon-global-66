import { IPagination } from '../interfaces';
import apiConnector from '../services/api.service';
import dataMock from '../util//dataMock';
import { getNext } from '../util';

jest.mock('../services/api.service');

(apiConnector.pagination as jest.Mock).mockImplementation((offset: number, limit: number) => {
  const paginatedResults = dataMock.slice(offset, limit);
  return Promise.resolve({
    results: paginatedResults,
    count: dataMock.length,
  });
});

describe('getNext', () => {
  it('debería devolver "next" cuando hay más elementos disponibles', async () => {
    const data: IPagination = await apiConnector.pagination(0, 100)
    const result = getNext(data.results, 0);
    expect(result).toBe('next');
  });

  it('debería devolver "" cuando no hay más elementos disponibles', async () => {
    const data: IPagination = await apiConnector.pagination(0, 40)
    const result = getNext(data.results, 40);
    expect(result).toBe('');
  });

  it('debería devolver "" cuando se llega al final de la data', async () => {
    const data: IPagination = await apiConnector.pagination(0, 90)
    const result = getNext(data.results, 80);
    expect(result).toBe('');
  });
});