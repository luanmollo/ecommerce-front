import { BotonVolver } from "../BotonVolver/BotonVolver"
import styles from "../DetalleMenu/DetalleMenu.module.css"

export const DetalleMenu = () => {
  return (
    <div className={styles.container}>
        <div className={styles.mainBox}>
            <div className={styles.header}>
                <p>COD</p>
                <p>DENOMINACION</p>
                <BotonVolver />
            </div>
            Detalle
        </div>
    </div>
  )
}
