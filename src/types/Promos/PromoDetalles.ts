import { Articulo } from "../Articulos/Articulo";
import { Base } from "../Base";

export interface PromoDetalles extends Base {
    cantidad: number;
    articulo: Articulo;
}