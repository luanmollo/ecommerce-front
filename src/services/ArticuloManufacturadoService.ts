import { BackendClient, base } from "./BackendClient";
import { ArticuloManufacturado } from "../types/Articulos/ArticuloManufacturado";

export class ArticuloManufacturadoService extends BackendClient<ArticuloManufacturado> {
    protected baseUrl: string = base + "articulosManufacturados";

    async getByCategoria(categoriaDenominacion: string, sucursalId: Number): Promise<ArticuloManufacturado[] | undefined> {
        const response = await fetch(`${this.baseUrl}/getHabilitados/${categoriaDenominacion}/${sucursalId}`);
        if (!response.ok) {
          return undefined;
        }
        const data = await response.json();
        return data as ArticuloManufacturado[];
    }
}