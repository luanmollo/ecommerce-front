import { Base } from "../Base";
import { Sucursal } from "../Empresa/Sucursal";
import { IImagen } from "../Imagen";
import { PromoDetalles } from "./PromoDetalles";

export interface Promo extends Base {
    denominacion: string;
    fechaDesde: string;
    fechaHasta: string;
    horaDesde: string;
    horaHasta: string;
    habilitado: boolean;
    descripcionDescuento: string;
    precioPromocional: number;
    tipoPromocion: string;
    promocionDetalles: PromoDetalles;
    imagenes?: IImagen[];
    sucursales?: Sucursal[];
}