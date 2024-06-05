import { Sucursal } from "../types/Empresa/Sucursal";
import { BackendClient, base } from "./BackendClient";

export class SucursalService extends BackendClient<Sucursal> {
    protected baseUrl: string = base + "sucursales";
}