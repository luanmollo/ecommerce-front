import { Pedido } from "../types/Pedidos/Pedido";
import { BackendClient, base } from "./BackendClient";
import { PedidoPost } from "../types/Pedidos/Pedido";

export class PedidoService extends BackendClient<Pedido> {
    protected baseUrl: string = base + "pedidos";

    async create(data: PedidoPost): Promise<Pedido> {
        const response = await fetch(`${this.baseUrl}/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const newData = await response.json();
        return newData as Pedido;
    }
}