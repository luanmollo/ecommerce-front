import { Base } from "../Base";
import { Provincia } from "./Provincia";

export interface Localidad extends Base {
    nombre: string,
    provincia: Provincia
}