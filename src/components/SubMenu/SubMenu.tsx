import styles from "../Menu/Menu.module.css"
import imagen from "../../img/logoBackgroundRemoved.png"
import { Link } from "react-router-dom"

export const SubMenu = () => {
  return (
    <div className={styles.menu}>
      {
        <>
        <Link to="/detalle/" className={styles.card}>
          <div className={styles.imgBox} ><img src={imagen}></img></div>
          PRODUCTO X
        </Link>

        <Link to="/detalle/" className={styles.card}>
          <div className={styles.imgBox} ><img src={imagen}></img></div>
          PRODUCTO X
        </Link>

        <Link to="/detalle/" className={styles.card}>
          <div className={styles.imgBox} ><img src={imagen}></img></div>
          PRODUCTO X
        </Link>
        </>
      }
    </div>
  )
}
