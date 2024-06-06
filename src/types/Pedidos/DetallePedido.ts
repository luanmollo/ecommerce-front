import { ArticuloInsumo } from "../Articulos/ArticuloInsumo";
import { ArticuloManufacturado } from "../Articulos/ArticuloManufacturado";
import { Base } from "../Base";

export interface DetallePedido extends Base {
    cantidad: number,
    subTotal: number,
    articulo: ArticuloInsumo | ArticuloManufacturado
}

export function calcularSubtotal(detalle: DetallePedido): number {
    return detalle.articulo.precioVenta * detalle.cantidad;
}