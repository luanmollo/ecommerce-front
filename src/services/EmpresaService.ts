import { Empresa } from "../types/Empresa/Empresa";
import { BackendClient, base } from "./BackendClient";

export class EmpresaService extends BackendClient<Empresa> {
    protected baseUrl: string = base + "empresas";

    async getFullEmpresa(id: number): Promise<Empresa | undefined> {
        const response = await fetch(`${this.baseUrl}/full/${id}`);
        if (!response.ok) {
          return undefined;
        }
        const data = await response.json();
        return data as Empresa;
    }
}