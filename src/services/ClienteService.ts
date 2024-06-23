import { Cliente } from "../types/Personas/Cliente";
import { BackendClient, base } from "./BackendClient";

export class ClienteService extends BackendClient<Cliente> {
    protected baseUrl: string = base + "clientes";

    async getByUserId(idUsuario: number): Promise<Cliente> {
        const response = await fetch(`${this.baseUrl}/getClientePorUserId/` + idUsuario);
        const data = await response.json();
        return data as Cliente;
      }
}