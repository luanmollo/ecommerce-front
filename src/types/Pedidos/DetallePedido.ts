import { ArticuloInsumo } from "../Articulos/ArticuloInsumo";
import { ArticuloManufacturado } from "../Articulos/ArticuloManufacturado";
import { Base } from "../Base";

export interface DetallePedido extends Base {
    cantidad: number,
    subTotal: number,
    articulo: ArticuloInsumo | ArticuloManufacturado
}

export interface DetallePedidoPost {
    cantidad: number,
    idArticulo: number
}

export function calcularSubtotal(detalle: DetallePedido): number {
    return detalle.articulo.precioVenta * detalle.cantidad;
}