//import CIcon from "@coreui/icons-react"
import { useNavigate } from "react-router-dom"
import styles from "../BotonVolver/BotonVolver.module.css"
//import { cilArrowLeft } from "@coreui/icons"

export const BotonVolver = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.btn} onClick={() => navigate(-1)} >
      {/*<CIcon icon={cilArrowLeft} size="sm"/>*/}
      VOLVER
    </button>
  )
}
