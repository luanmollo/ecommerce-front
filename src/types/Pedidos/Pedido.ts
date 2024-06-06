import { Base } from "../Base";
import { Domicilio } from "../Domicilio/Domicilio";
import { Sucursal } from "../Empresa/Sucursal";
import { Cliente } from "../Personas/Cliente";
import { DetallePedido } from "./DetallePedido";

export enum Estado {
    PREPARACION,
    PENDIENTE,
    CANCELADO,
    RECHAZADO,
    ENTREGADOS
}

export enum TipoEnvio {
    DELIVERY,
    TAKE_AWAY
}

export enum FormaPago {
    EFECTIVO,
    MERCADO_PAGO
}

export interface Pedido extends Base {
    horaEstimadaFinalizacion: string, //cambiar por hora
    total: number,
    totalCosto: number,
    estado: Estado,
    tipoEnvio: TipoEnvio,
    formaPago: FormaPago,
    fechaPedido: Date,
    domicilio: Domicilio,
    sucursal: Sucursal,
    //factura: Factura,
    //empleado: Empleado,
    cliente: Cliente,
    detallePedidos: DetallePedido[]
}

export function calcularTotal(detalles: DetallePedido[]) : number {
    var tot = 0;

    detalles.forEach((detalle: DetallePedido) => {
        tot = tot + detalle.subTotal;
    });

    return tot;
}