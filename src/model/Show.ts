export interface Show {
    id: string,
    weekDay: WeekDay,
    startTime: string,
    endTime: string,
    bandId: string
}

export interface InputShow {
    weekDay: WeekDay,
    startTime: string,
    endTime: string,
    bandId: string,
    idAutentication: string
}

export enum WeekDay{
    SEXTA = "sexta",
    SABADO = "sabado",
    DOMINGO = "domingo"
}