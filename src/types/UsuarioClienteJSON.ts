import UsuarioCliente from "./UsuarioCliente";

export default class UsuarioClienteJSON{
    id:number=0;
    nombre:string="";
    apellido:string="";
    telefono:string="";
    fechaNacimiento: Date | undefined;
    usuarioCliente: UsuarioCliente | undefined;
}