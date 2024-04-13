import { type ImageSourcePropType } from "react-native"

export type CivilDefenseType = [
    {
        title: string,
        image: any
    },
    {
        title: string,
        image: any
    },
    {
        title: string,
        image: any
    },
    {
        title: string,
        image: any
    },
]

export interface CivilDefenseVideos {
    datos: CivilDefenseVideoType[];
}

export type CivilDefenseVideoType = {
    id:          string;
    fecha:       Date | string;
    titulo:      string;
    descripcion: string;
    link:        string;
}

export interface CivilDefenseServices {
    datos: CivilDefenseServiceType[]
}

export type CivilDefenseServiceType = {
    id:          string;
    nombre:      string;
    descripcion: string;
    foto:        string;
}

