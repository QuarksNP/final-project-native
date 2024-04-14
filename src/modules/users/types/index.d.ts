import { type ImageSourcePropType } from "react-native";

export type CivilDefenseType = [
  {
    title: string;
    image: any;
  },
  {
    title: string;
    image: any;
  },
  {
    title: string;
    image: any;
  },
  {
    title: string;
    image: any;
  }
];

export interface CivilDefenseVideos {
  datos: CivilDefenseVideoType[];
}

export type CivilDefenseVideoType = {
  id: string;
  fecha: Date | string;
  titulo: string;
  descripcion: string;
  link: string;
};

export interface CivilDefenseServices {
  datos: CivilDefenseServiceType[];
}

export type CivilDefenseServiceType = {
  id: string;
  nombre: string;
  descripcion: string;
  foto: string;
};

export interface CivilDefenseNews {
  datos: CivilDefenseNewsType[];
}

export type CivilDefenseNewsType = {
  id: string;
  fecha: string;
  titulo: string;
  contenido: string;
  foto: string;
};

export type MeasureType = {
  id: string;
  titulo: string;
  descripcion: string;
  foto: string;
};

export type LocationType = {
  ciudad: string;
  codigo: string;
  edificio: string;
  coordinador: string;
  telefono: string;
  capacidad: string;
  lat: string;
  lng: string;
};

export type MembersType = {
  id: string
  foto: string
  nombre: string
  cargo: string
}