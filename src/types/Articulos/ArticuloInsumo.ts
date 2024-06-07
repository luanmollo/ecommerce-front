import { Base } from "../Base";
import { IImagen } from "../Imagen";
import { Categoria } from "./Categoria";

export interface ArticuloInsumo extends Base {
    denominacion: string;
    precioVenta: number;
    habilitado: boolean;
    codigo: string;
    imagenes?: IImagen[];
    esParaElaborar: boolean;
    categoria: Categoria
}