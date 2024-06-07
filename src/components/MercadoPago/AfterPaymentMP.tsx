import styles from "../Pedido/Pedido.module.css"
import { useParams } from "react-router-dom";

export const AfterPaymentMP = () => {
  const { state } = useParams();
  return (
    <div>
        { 
            state === "mpsuccess" && (
                <div className={styles.realizadoDiv}>
                    <h2>Su pedido fue pagado con <p className={styles.exito}>éxito</p></h2>
                </div>
            )
        }
        {
            state === "mppending" && (
                <div className={styles.realizadoDiv}>
                    <h2>Su pago está en espera</h2>
                </div>
            )
        }
        {
            state === "mpfailure" && (
                <div className={styles.realizadoDiv}>
                    <h2>Error al pagar</h2>
                </div>
            )
        }
    </div>
  )
}
