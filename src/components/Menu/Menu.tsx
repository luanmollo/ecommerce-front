import styles from "../Menu/Menu.module.css"
import imagen from "../../img/logoBackgroundRemoved.png"
import { Link } from "react-router-dom"

export const Menu = () => {
  return (
    <div className={styles.menu}>
      {
        <Link to="cat" className={styles.card}>
          <div className={styles.imgBox} ><img src={imagen}></img></div>
          CATEGORIA A
        </Link>
      }
    </div>
  )
}
