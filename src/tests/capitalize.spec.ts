import { capitalizeFirstLetter } from '../util/index';

describe('función capitalize', () => {
  it('debería convertir en mayuscula la primera letra', () => {
    expect(capitalizeFirstLetter('hola')).toBe('Hola');
  });
  it('debería manejar una palabra que ya tiene la primera letra en mayusculas', () => {
    expect(capitalizeFirstLetter('Hola')).toBe('Hola');
  });

  it('debería poner en minúscula el resto de la palabra', () => {
    expect(capitalizeFirstLetter('HOLA')).toBe('Hola');
  });
  it('debería poner en mayuscula dejar en mayusculas la primera letra y las demas en minúsculas', () => {
    expect(capitalizeFirstLetter('HOLA Wilmer')).toBe('Hola wilmer');
  });
});
