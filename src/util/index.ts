import { IBasicPokemon, IPagination } from "../interfaces";

export const getNext = (list: IBasicPokemon[], offset: number): string => {
    const offsetNext = offset + 20;
    const next = list.slice(offsetNext, (offsetNext + 20));
    return next.length ? 'next' : '';
};

export const filterList = (list: IBasicPokemon[], searching: string): IBasicPokemon[] => {
    const term = searching.toLowerCase();
    return list.filter((pokemon: IBasicPokemon) => pokemon.name.toLowerCase().includes(term))
};

export const getPagination = (data: IBasicPokemon[], offset: number): IPagination => {
    return {
        results: data.slice(offset, (offset + 20)),
        count: data.length,
        next: getNext(data, offset),
        previous: offset > 0 ? 'previous' : '',
      }
}

export const includeFavorites = (list: IBasicPokemon[], favorites: IBasicPokemon[]): IBasicPokemon[]=> {
    return list.map((p: IBasicPokemon) => {
        const favorite = favorites.find((f: IBasicPokemon) => f.name === p.name);
            p.isFavorite = Boolean(favorite);
            return p;
        });
}

export const capitalizeFirstLetter = (str: string): string => {
    str = str.toLowerCase();
    const firstLetter = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1);
    return firstLetter + restOfString;
}