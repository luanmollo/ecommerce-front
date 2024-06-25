import { ArticuloInsumo } from "../Articulos/ArticuloInsumo";
import { ArticuloManufacturado } from "../Articulos/ArticuloManufacturado";
import { Base } from "../Base";
import { Promo } from "../Promos/Promo";

export interface DetallePedido extends Base {
    cantidad: number,
    subTotal: number,
    articulo: ArticuloInsumo | ArticuloManufacturado | undefined,
    promocion: Promo | undefined
}

export interface DetallePedidoPost {
    cantidad: number,
    idArticulo: number | undefined
    idPromocion: number | undefined
}



export function calcularSubtotal(detalle: DetallePedido): number {
    if (detalle?.articulo) {

        return detalle.articulo.precioVenta * detalle.cantidad;
    }
    else {
        //return detalle.promo.precioPromocional * detalle.cantidad
    }

    return 0;
}