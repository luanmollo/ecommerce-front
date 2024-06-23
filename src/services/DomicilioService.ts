import { Domicilio } from "../types/Domicilio/Domicilio";
import { BackendClient, base } from "./BackendClient";

export class DomicilioService extends BackendClient<Domicilio> {
    baseUrl: string = base +"domicilios"; 

    async getBySucursalId(idSucusal: number): Promise<Domicilio | undefined> {
        const response = await fetch(`${this.baseUrl}/domicilioSucursal/${idSucusal}`);
        if (!response.ok) {
          return undefined;
        }
        const data = await response.json();
        return data as Domicilio;
    }
}