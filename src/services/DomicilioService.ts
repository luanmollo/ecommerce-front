import { Domicilio } from "../types/Domicilio/Domicilio";
import { DomicilioCliente } from "../types/Domicilio/DomicilioCliente";
import { BackendClient, base } from "./BackendClient";

export class DomicilioService extends BackendClient<Domicilio> {
  baseUrl: string = base + "domicilios";

  async getBySucursalId(idSucusal: number): Promise<Domicilio | undefined> {
    const response = await fetch(`${this.baseUrl}/domicilioSucursal/${idSucusal}`);
    if (!response.ok) {
      return undefined;
    }
    const data = await response.json();
    return data as Domicilio;
  }

  //crear domicilio y asociarlo a un cliente
  async createDomicilio(domicilioCliente: DomicilioCliente): Promise<DomicilioCliente> {

    const response = await fetch(`${this.baseUrl}/createDomicilio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(domicilioCliente),
    });

    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzar un error con el mensaje de error
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error desconocido');
    }

    const newData = await response.json();
    return newData as DomicilioCliente;
  }
}