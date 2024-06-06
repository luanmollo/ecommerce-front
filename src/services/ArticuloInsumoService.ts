import { ArticuloInsumo } from "../types/Articulos/ArticuloInsumo";
import { BackendClient, base } from "./BackendClient";


export class ArticuloInsumoService extends BackendClient<ArticuloInsumo> {
    protected baseUrl: string = base + "articulosInsumos";

    async getByCategoria(categoriaId: number): Promise<ArticuloInsumo[] | undefined> {
        const response = await fetch(`${this.baseUrl}//${categoriaId}`);
        if (!response.ok) {
          return undefined;
        }
        const data = await response.json();
        return data as ArticuloInsumo[];
    }
}