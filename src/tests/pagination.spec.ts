import { IBasicPokemon, IPagination } from '../interfaces';

import apiConnector from '../services/api.service';
import dataMock from '../util//dataMock';
import { getPagination } from '../util/index';

jest.mock('../services/api.service');

(apiConnector.pagination as jest.Mock).mockImplementation((offset: number, limit: number) => {
  const paginatedResults = dataMock.slice(offset, limit);
  return Promise.resolve(paginatedResults);
});

describe('getPagination', () => {
  it('debería devolver los resultados correctos y la paginación', async () => {
      const data: IBasicPokemon[] = await apiConnector.pagination(0, 50)
      const result = getPagination(data, 0);

      expect(result.results.length).toBe(20); 
      expect(result.count).toBe(50);
      expect(result.next).toBe('next');
      expect(result.previous).toBe('');
  });

  it('debería devolver los resultados correctos en la segunda página', async () => {
      const data: IBasicPokemon[] = await apiConnector.pagination(0, 50)
      const result = getPagination(data, 20);

      expect(result.results.length).toBe(20); 
      expect(result.count).toBe(50);
      expect(result.next).toBe('next');
      expect(result.previous).toBe('previous');
  });

  it('debería devolver la última página correctamente', async () => {
      const data: IBasicPokemon[] = await apiConnector.pagination(0, 50)
      const result = getPagination(data, 40);

      expect(result.results.length).toBe(10);
      expect(result.count).toBe(50);
      expect(result.next).toBe('');
      expect(result.previous).toBe('previous');
  });
});