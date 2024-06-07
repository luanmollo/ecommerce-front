//import CIcon from "@coreui/icons-react"
import { useNavigate } from "react-router-dom"
import styles from "../BotonVolver/BotonVolver.module.css"
//import { cilArrowLeft } from "@coreui/icons"
import { FC } from "react"

interface IPropsBotonVolver {
  route: string
}

export const BotonVolver : FC<IPropsBotonVolver> = ({route}) => {
  const navigate = useNavigate();

  return (
    <button className={styles.btn} onClick={() => navigate(route)} >
      {/*<CIcon icon={cilArrowLeft} size="sm"/>*/}
      VOLVER
    </button>
  )
}
