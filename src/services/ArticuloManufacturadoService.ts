import { BackendClient, base } from "./BackendClient";
import { ArticuloManufacturado } from "../types/ArticuloManufacturado";

export class ArticuloManufacturadoService extends BackendClient<ArticuloManufacturado> {
    protected baseUrl: string = base + "articulos-manufacturados";
}