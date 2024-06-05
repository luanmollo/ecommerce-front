import styles from "../Menu/Menu.module.css"
import imagen from "../../img/logoBackgroundRemoved.png"
import { Link } from "react-router-dom"

export const Sucursales = () => {
    return (
      <div className={styles.menu}>
        {
          <Link to="/menu/" className={styles.card}>
            <div className={styles.imgBox} ><img src={imagen}></img></div>
            SUCURSAL X
          </Link>
        }
      </div>
    )
  }
  