import { Cliente } from "../types/Personas/Cliente";
import { BackendClient, base } from "./BackendClient";

export class ClienteService extends BackendClient<Cliente> {
    protected baseUrl: string = base + "clientes";
}