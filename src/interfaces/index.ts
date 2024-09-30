export interface IBasicPokemon {
    name: string;
    url: any;
    isFavorite: boolean;
};

export interface IType {
    slop: number;
    type: IBasicPokemon
}
export interface ISprites {
    frontDefault: string;
    frontShiny: string;
}
export interface IPokemon extends IBasicPokemon {
    sprites?: ISprites; 
    height: number;
    types: IType[];
    weight: number;
}

export interface IPagination {
    count: number
    next: string
    previous: string
    results: IBasicPokemon[]
};

export enum TypeColor {
    danger= 'danger',
    secundary= 'secundary',
    warning= 'warning',
    white= 'white',
};

export interface IColor {
    main: string,
    like: string,
    dark: string
};

export interface IColors {
    danger: IColor;
    secundary: IColor;
    warning: IColor;
    white: IColor;
}