import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout";
import { Menu } from "../components/Menu/Menu";
import { SubMenu } from "../components/SubMenu/SubMenu";
import { Carrito } from "../components/Carrito/Cart";
import { DetalleMenu } from "../components/DetalleMenu/DetalleMenu";
import { Empresas } from "../components/Empresas/Empresas";
import { Sucursales } from "../components/Sucursales/Sucursales";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route path="menu/:id?" element={<Menu/>} />
            <Route index element={<Empresas />} />
            <Route path="sucursales/:id?" element={<Sucursales />} />
            <Route path="cat/:id?" element={<SubMenu />} />
            <Route path="detalle/:id?" element={<DetalleMenu />} />
            <Route path="carrito" element={<Carrito/>} />
        </Route>
    )
);

export const AppRoutes = () => {
    return (
        <>
            <RouterProvider router={router}>
            </RouterProvider>
        </>
    )
}