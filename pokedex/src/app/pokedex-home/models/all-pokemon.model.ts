export interface AllPokemon {
    count: number;
    next: string;
    previous: string | null;
    results: ListedPokemon[];
}

export interface ListedPokemon {
    name: string,
    url: string
}