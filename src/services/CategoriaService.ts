import { Categoria } from "../types/Articulos/Categoria";
import { BackendClient } from "./BackendClient";
import { base } from "./BackendClient";

export class CategoriaService extends BackendClient<Categoria> {
    protected baseUrl: string = base + "categorias";

    async getBySucursalId(sucursalId: number): Promise<Categoria[] | undefined> {
        const response = await fetch(`${this.baseUrl}/sucursal/${sucursalId}`);
        if (!response.ok) {
          return undefined;
        }
        const data = await response.json();
        return data as Categoria[];
    }
}