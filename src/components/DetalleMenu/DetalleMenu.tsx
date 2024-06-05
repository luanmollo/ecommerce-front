import { Form } from "react-router-dom"
import { BotonAgregar } from "../BotonAgregar/BotonAgregar"
import { BotonVolver } from "../BotonVolver/BotonVolver"
import styles from "../DetalleMenu/DetalleMenu.module.css"

export const DetalleMenu = () => {
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
          <input className={styles.inputNumber}
            type="number"
            name="cantidad"
            defaultValue="1"
          />
          <BotonAgregar />
        </div>
      </div>
    </div>
  )
}
