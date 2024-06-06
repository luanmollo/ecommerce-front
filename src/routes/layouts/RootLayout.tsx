import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header/Header"
/*import { useCarrito } from "../../hooks/useCarrito"
import { useEffect } from "react"
import { ArticuloInsumo } from "../../types/Articulos/ArticuloInsumo"
import { ArticuloManufacturado } from "../../types/Articulos/ArticuloManufacturado"
import { DetallePedido } from "../../types/Pedidos/DetallePedido"*/

/*const pizza: ArticuloManufacturado = {
  denominacion: "Pizza",
  descripcion: "descripcion",
  tiempoEstimadoMinutos: 15,
  habilitado: true,
  codigo:"1",
  precioVenta: 500,
  id: 1,
  eliminado: false,
}

const coquita: ArticuloInsumo = {
  id: 2,
  eliminado: false,
  denominacion: "Coca cola 500ml",
  precioVenta: 2000,
  habilitado: true,
  codigo: "2",
  esParaElaborar: false
}

const detalle1: DetallePedido = {
  id: 1,
  eliminado: false,
  cantidad: 3,
  subTotal: 1500,
  articulo: pizza
}

const detalle2: DetallePedido = {
  id: 2,
  eliminado: false,
  cantidad: 6,
  subTotal: 12000,
  articulo: coquita
}*/


export const RootLayout = () => {
  /*const carrito = useCarrito();

  const instert1 = async () => {
    await carrito.addItemCart(detalle1);
  }

  const instert2 = async () => {
    await carrito.addItemCart(detalle2);
  }

  useEffect(() => {
    instert1();
    instert2();
  }, [])*/

  return (
    <div style={{height: "100vh"}}>
        <Header />
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
