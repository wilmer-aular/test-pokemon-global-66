import { IBasicPokemon } from '../interfaces';
import { filterList } from '../util';

describe('filterList', () => {
  it('debería devolver una lista filtrada con coincidencias exactas', () => {
    const list: IBasicPokemon[] = [
      { name: 'Pikachu', isFavorite: false, url: '' },
      { name: 'Charmander', isFavorite: false, url: '' },
      { name: 'Bulbasaur', isFavorite: false, url: '' },
    ];

    const result = filterList(list, 'Pikachu');
    expect(result).toEqual([{ name: 'Pikachu', isFavorite: false, url: '' }]);
  });

  it('debería devolver una lista filtrada con coincidencias parciales', () => {
    const list: IBasicPokemon[] = [
      { name: 'Pikachu', isFavorite: false, url: '' },
      { name: 'Charmander', isFavorite: false, url: '' },
      { name: 'Bulbasaur', isFavorite: false, url: '' },
    ];

    const result = filterList(list, 'char');
    expect(result).toEqual([{ name: 'Charmander', isFavorite: false, url: '' }]);
  });

  it('debería devolver una lista vacía si no hay coincidencias', () => {
    const list: IBasicPokemon[] = [
      { name: 'Pikachu', isFavorite: false, url: '' },
      { name: 'Charmander', isFavorite: false, url: '' },
      { name: 'Bulbasaur', isFavorite: false, url: '' },
    ];

    const result = filterList(list, 'Eevee');
    expect(result).toEqual([]);
  });
});