//import CIcon from "@coreui/icons-react"
import styles from "../BotonAgregar/BotonAgregar.module.css"
//import { cilArrowLeft } from "@coreui/icons"

export const BotonAgregar = () => {

  return (
    <button className={styles.btn} onClick={() => alert("agregado al carrito")} >
        {/*<CIcon icon={cilArrowLeft} size="lg"/>*/}
        Agregar al carrito
    </button>
  )
}
