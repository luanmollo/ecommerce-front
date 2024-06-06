import { Sucursal } from "../types/Empresa/Sucursal";
import { BackendClient, base } from "./BackendClient";
import { Categoria } from "../types/Articulos/Categoria";

export class SucursalService extends BackendClient<Sucursal> {
    protected baseUrl: string = base + "sucursales";

    async getCategoriasBySucursalId(sucursalId: number): Promise<Categoria[] | undefined> {
        const response = await fetch(`${this.baseUrl}/categorias/${sucursalId}`);
        if (!response.ok) {
          return undefined;
        }
        const data = await response.json();
        return data as Categoria[];
    }

    async getByEmpresaId(empresaId: number): Promise<Sucursal[] | undefined> {
        const response = await fetch(`${this.baseUrl}/porEmpresa/${empresaId}`);
        if (!response.ok) {
          return undefined;
        }
        const data = await response.json();
        return data as Sucursal[];
    }
}