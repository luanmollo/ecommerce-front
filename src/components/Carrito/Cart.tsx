import { BotonEliminar } from "../BotonEliminar/BotonEliminar"
import { BotonVolver } from "../BotonVolver/BotonVolver"
import styles from "../DetalleMenu/DetalleMenu.module.css"


export const Carrito = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <div className={styles.header}>
          <p>COD</p>
          <p>DENOMINACION</p>
          <p>CANTIDAD</p>
          <BotonVolver />
        </div>


        <div className={styles.row}>
          <p>123</p>
          <p>pizza</p>
          <p>2</p>
          <BotonEliminar />
        </div>
      </div>
    </div>
  )
}
