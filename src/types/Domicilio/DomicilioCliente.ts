import { Base } from "../Base";
import { Localidad } from "./Localidad";

export interface DomicilioCliente extends Base {
    calle: string,
    numero: number,
    cp: number,
    piso: number,
    nroDpto: number,
    localidad: Localidad,
    idClientes: number[]
}