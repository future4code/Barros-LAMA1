export interface Show {
    id: string,
    weekDay: WeekDayEnum,
    startTime: string,
    endTime: string,
    bandId: string
}

export interface InputShow {
    weekDay: WeekDayEnum,
    startTime: string,
    endTime: string,
    bandId: string,
    idAutentication:string
}

export enum WeekDayEnum{
    SEXTA = "SEXTA",
    SABADO = "SABADO",
    DOMINGO = "DOMINGO"
}

export interface CreateShow{
    id: string,
    weekDay: WeekDayEnum,
    startTime: string,
    endTime: string,
    bandId: string,
    authentication:string
}