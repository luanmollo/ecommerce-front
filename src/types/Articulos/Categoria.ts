import { Base } from "../Base";

export interface Categoria extends Base {
    denominacion: string;
    esInsumo: boolean;
    subCategorias?: Categoria[]
}