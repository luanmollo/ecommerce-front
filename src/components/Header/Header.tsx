import { Link } from "react-router-dom"
import styles from "../Header/Header.module.css"
import logo from "../../img/logoNoName.png"

export const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.brand}>
          <img className={styles.logo} src={logo}/>
          El Buen Sabor
        </div>
        <div className={styles.links}>
          <Link to="/">Menu</Link>
          <Link to="carrito">Carrito</Link>
        </div>
    </div>
  )
}
