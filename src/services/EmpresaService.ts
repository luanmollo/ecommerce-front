import { Empresa } from "../types/Empresa/Empresa";
import { BackendClient, base } from "./BackendClient";

export class EmpresaService extends BackendClient<Empresa> {
    protected baseUrl: string = base + "empresas";
}