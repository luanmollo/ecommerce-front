import styles from "../PageNotFound/PageNotFound.module.css"

export const PageNotFound = () => {
  return (
    <div className={styles.main}>
        <p>Error 404</p>
        <p>Página no encontrada</p>
        <img src="src/img/logoBackgroundRemoved.png" />
    </div>
  )
}
