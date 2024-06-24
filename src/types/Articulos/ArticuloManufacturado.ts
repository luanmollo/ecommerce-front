import { Articulo } from "./Articulo";

export interface ArticuloManufacturado extends Articulo {
    descripcion: string,
    tiempoEstimadoMinutos: number,
}