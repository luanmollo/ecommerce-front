import { Base } from "../Base";
import { IImagen } from "../Imagen";

export interface ArticuloManufacturado extends Base {
    denominacion: string,
    descripcion: string,
    tiempoEstimadoMinutos: number,
    habilitado: boolean,
    codigo: string,
    imagenes: IImagen[],
    precioVenta: number
}