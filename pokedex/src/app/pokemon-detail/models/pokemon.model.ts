export interface Pokemon {
    name: string;
    moves: string[];
    sprites: PokemonSprites;
    types: PokemonTypes[];
}

export interface PokemonSprites {
    back_female: string;
    back_shiny_female: string;
    back_default: string;
    front_female: string;
    front_shiny_female: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface PokemonTypes {
    slot: number,
    type: PokemonType
}

export interface PokemonType {
    name: string,
    url: string
}