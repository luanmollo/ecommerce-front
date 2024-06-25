import { ReactNode, createContext, useState } from "react";
import { DetallePedido } from "../types/Pedidos/DetallePedido";

interface CartContextType {
    cart: DetallePedido[];
    addItemCart: (detail: DetallePedido) => void;
    removeItemCart: (detail: DetallePedido) => void;
    cleanCart: () => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addItemCart: () => { },
    removeItemCart: () => { },
    cleanCart: () => { }
});

export function CartContextProvider({ children }: { children: ReactNode }) {

    const [cart, setCart] = useState<DetallePedido[]>([]);

    const addItemCart = async (detail: DetallePedido) => {
        //console.log(cart);
        let exist: boolean = false;
        let i: number = 0;
        cart.forEach((dp: DetallePedido, index: number) => {
            // if (dp.articulo.id === detail.articulo.id) {
            //     exist = true;
            //     i = index;
            // }

            if (dp.articulo != undefined && detail.articulo != undefined) {
                if (dp.articulo.id === detail.articulo.id) {
                    exist = true;
                    i = index;
                }

            } else {
                if (dp.promocion != undefined && detail.promocion != undefined) {
                    exist = true;
                    i = index;
                }

            }
        });

        if (exist) {
            const cartClone = await cart.slice();
            cartClone.splice(i, 1, detail);
            //cartClone.push();
            setCart(cartClone);
        } else {
            await setCart(prevCart => [...prevCart, detail]);
        }
    };

    const removeItemCart = async (detail: DetallePedido) => {
        //console.log(cart);
        let exist: boolean = false;
        let i: number = 0;
        cart.forEach((dp: DetallePedido, index: number) => {
            if (dp.articulo != undefined && detail.articulo != undefined) {
                if (dp.articulo.id === detail.articulo.id) {
                    exist = true;
                    i = index;
                }

            } else {
                if (dp.promocion != undefined && detail.promocion != undefined) {
                    exist = true;
                    i = index;
                }

            }
        });

        if (exist) {
            const cartClone = cart.slice();
            cartClone.splice(i, 1);
            await setCart(cartClone);
        }
    };

    const cleanCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItemCart, removeItemCart, cleanCart }}>
            {children}
        </CartContext.Provider>
    );
}