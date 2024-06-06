import { ArticuloInsumo } from "../Articulos/ArticuloInsumo";
import { ArticuloManufacturado } from "../Articulos/ArticuloManufacturado";
import { Base } from "../Base";

export interface DetallePedido extends Base {
    cantidad: number,
    subTotal: number,
    articulo: ArticuloInsumo | ArticuloManufacturado
}