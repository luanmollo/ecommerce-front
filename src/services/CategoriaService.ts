import { Categoria } from "../types/Articulos/Categoria";
import { BackendClient } from "./BackendClient";
import { base } from "./BackendClient";

export class CategoriaService extends BackendClient<Categoria> {
    protected baseUrl: string = base + "categorias";    
}