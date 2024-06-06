import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout";
import { Menu } from "../components/Menu/Menu";
import { SubMenu } from "../components/SubMenu/SubMenu";
import { Carrito } from "../components/Carrito/Cart";
import { DetalleMenu } from "../components/DetalleMenu/DetalleMenu copy";
import { Empresas } from "../components/Empresas/Empresas";
import { Sucursales } from "../components/Sucursales/Sucursales";
import { ArticuloManufacturadoService } from "../services/ArticuloManufacturadoService";
import { ArticuloInsumoService } from "../services/ArticuloInsumoService";
import { Suspense } from "react";
import { Loader } from "../components/Loader/Loader";
import { Pedido } from "../components/Pedido/Pedido";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Empresas />} />
            <Route path="sucursales/:id?" element={<Sucursales />} />

            <Route path="menu/:id?" element={<Menu/>} />
            <Route path="cat/:id?" element={<SubMenu />} />
            <Route path="detalle/:id?" element={<DetalleMenu service={new ArticuloManufacturadoService()} />} />
            <Route path="detalle/otro/:id?" element={<DetalleMenu service={new ArticuloInsumoService()}/>} />
            
            <Route path="carrito" element={<Carrito/>} />
            <Route path="pedido" element={<Pedido/>} />
        </Route>
        
    )
);

export const AppRoutes = () => {
    return (
        <>
        <Suspense fallback={<Loader/>}>
            <RouterProvider router={router}>
            </RouterProvider>
        </Suspense>
        </>
    )
}