import { Base } from "../Base";
import { IImagen } from "../Imagen";
import { Categoria } from "./Categoria";

export interface Articulo extends Base {
    denominacion: string;
    precioVenta: number;
    habilitado: boolean,
    codigo: string,
    categoria: Categoria,
    imagenes?: IImagen[];
    
}