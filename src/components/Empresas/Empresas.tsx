import styles from "../Menu/Menu.module.css"
import emp1 from "../../img/emp1.jpg"
import emp2 from "../../img/emp2.jpg"
import emp3 from "../../img/emp3.jpg"
import { Link } from "react-router-dom"

export const Empresas = () => {
    return (
      <div className={styles.menu}>
        {
          <>
          
          <Link to="/sucursales/" className={styles.card}>
            <div className={styles.imgBox} ><img src={emp1}></img></div>
            EMPRESA X
          </Link>

          <Link to="/sucursales/" className={styles.card}>
            <div className={styles.imgBox} ><img src={emp2}></img></div>
            EMPRESA X
          </Link>

          <Link to="/sucursales/" className={styles.card}>
            <div className={styles.imgBox} ><img src={emp3}></img></div>
            EMPRESA X
          </Link>


          </>
        }
      </div>
    )
  }
  