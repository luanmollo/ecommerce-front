import { Domicilio } from "../Domicilio/Domicilio";

export function formatDomicilio(domicilio: Domicilio): string{
    return domicilio.calle + " " + domicilio.numero +
        ", " + domicilio.localidad.nombre + ", " + 
        domicilio.localidad.provincia.nombre;
}