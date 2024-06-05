import { Base } from "../Base";
import { Domicilio } from "../Domicilio";

export interface Sucursal extends Base {
    nombre: string,
    logo: string,
    domicilio: Domicilio
}