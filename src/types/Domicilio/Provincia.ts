import { Base } from "../Base";
import { Pais } from "./Pais";

export interface Provincia extends Base {
    nombre: string,
    pais: Pais
}