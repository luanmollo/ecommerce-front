//import CIcon from "@coreui/icons-react"
import styles from "../BotonEliminar/BotonEliminar.module.css"


export const BotonEliminar = () => {

  return (
    <button className={styles.btnDanger} onClick={() => alert("eliminado del carrito")} >
        Quitar del carrito
    </button>
  )
}
