import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { FC, useEffect } from "react";
import { PreferenceMP } from "../../types/MercadoPago/PreferenceMP";


interface IPropsCheckoutMP {
    preferencedId: PreferenceMP;
}

export const CheckoutMP : FC<IPropsCheckoutMP> = ({
    preferencedId
}) => {
  
    useEffect(() => {
        initMercadoPago( "TEST-6d27a128-b99d-40c9-b295-c6bc701e7a7f", {
            locale: "es-AR"
        });
    }, [preferencedId])

  return (
    <div>
        <Wallet
            initialization={{preferenceId: preferencedId.id, redirectMode: "blank"}}
            customization={{texts: {valueProp: "smart_option"}}}
        />
    </div>
  )
}
