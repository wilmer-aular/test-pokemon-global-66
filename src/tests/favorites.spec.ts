import { IBasicPokemon } from '../interfaces';
import { includeFavorites } from '../util';

describe('includeFavorites', () => {
    it('debería marcar los favoritos correctamente', () => {
      const list: IBasicPokemon[] = [
        { name: 'Pikachu', isFavorite: false, url: '' },
        { name: 'Charmander', isFavorite: false, url: '' },
        { name: 'Bulbasaur', isFavorite: false, url: '' },
      ];
  
      const favorites: IBasicPokemon[] = [
        { name: 'Pikachu', isFavorite: true, url: '' },
        { name: 'Bulbasaur', isFavorite: true, url: '' },
      ];
  
      const result = includeFavorites(list, favorites);
  
      expect(result).toEqual([
        { name: 'Pikachu', isFavorite: true, url: '' },
        { name: 'Charmander', isFavorite: false, url: '' },
        { name: 'Bulbasaur', isFavorite: true, url: '' },
      ]);
    });
    it('debería devolver la lista completa sin favoritos', () => {
        const list: IBasicPokemon[] = [
          { name: 'Pikachu', isFavorite: false, url: '' },
          { name: 'Charmander', isFavorite: false, url: '' },
          { name: 'Bulbasaur', isFavorite: false, url: '' },
        ];
    
        const favorites: IBasicPokemon[] = [];
    
        const result = includeFavorites(list, favorites);
    
        expect(result).toEqual([
          { name: 'Pikachu', isFavorite: false, url: '' },
          { name: 'Charmander', isFavorite: false, url: '' },
          { name: 'Bulbasaur', isFavorite: false, url: '' },
        ]);
      });
      it('debería devolver la una lista vacia', () => {
        const list: IBasicPokemon[] = [];
    
        const favorites: IBasicPokemon[] = [
            { name: 'Pikachu', isFavorite: true, url: '' },
            { name: 'Bulbasaur', isFavorite: true, url: '' },
          ];
    
        const result = includeFavorites(list, favorites);
    
        expect(result).toEqual([]);
      });
  });