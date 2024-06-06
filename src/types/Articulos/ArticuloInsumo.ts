import { Base } from "../Base";
import { IImagen } from "../Imagen";

export interface ArticuloInsumo extends Base {
    denominacion: string;
    precioVenta: number;
    habilitado: boolean;
    codigo: string;
    imagenes?: IImagen[];
    esParaElaborar: boolean;
}