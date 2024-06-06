import { Base } from "../Base";

export interface Persona extends Base {
    nombre: string,
    apellido: string,
    telefono: string,
    fechaNacimiento: Date,
    //usuario: Usuario
    //imagenPersona: IImagen
}