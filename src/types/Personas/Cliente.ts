import { Persona } from "./Persona";
import { Domicilio } from "../Domicilio/Domicilio";

export interface Cliente extends Persona {
    domicilios: Domicilio[],
    //pedidos: Pedido[]
}