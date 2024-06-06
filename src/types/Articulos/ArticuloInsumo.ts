import { Base } from "../Base";
import { IImagen } from "../Imagen";

export interface ArticuloInsumo extends Base {
    denominacion: string;
    precioVenta: number;
    habilitado: boolean;
    codigo: boolean;
    imagenes: IImagen[];
    esParaElaborar: boolean;
}