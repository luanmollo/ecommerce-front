import { Articulo } from "./Articulo";

export interface ArticuloInsumo extends Articulo {
    esParaElaborar: boolean;
}