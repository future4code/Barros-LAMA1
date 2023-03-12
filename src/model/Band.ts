export interface Band{
    id: string;
    name: string;
    musicGenre: string;
    responsible: string
}

export interface InputBandDTO{
    name:string, 
    musicGenre:string,
    responsible:string,
    idAutorization:string
}

export interface InsertBandDTO{
    id:string,
    name:string, 
    musicGenre:string,
    responsible:string,
    idAutorization:string
}