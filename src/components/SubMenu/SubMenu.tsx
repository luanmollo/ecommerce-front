import styles from "../Menu/Menu.module.css"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { ArticuloManufacturadoService } from "../../services/ArticuloManufacturadoService";
import { ArticuloManufacturado } from "../../types/ArticuloManufacturado";

export const SubMenu = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState<ArticuloManufacturado[]>([]);

  const service = new ArticuloManufacturadoService();

  useEffect(() => {
    service.getAll().then((data) => (
      data != undefined ? setProductos(data) : setProductos([])
    ));
  }, []);

  return (
    <div className={styles.menu}>
<<<<<<< Updated upstream
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
=======
      { productos.length != 0 ? 
          productos.map((producto: ArticuloManufacturado) => 
            <Link key={producto.id} to={`detalle/${producto.id}` }className={styles.card}>
              <div className={styles.imgBox}>
                <img src={producto.imagenes[0].url} />
              </div>
              {producto.denominacion}
            </Link>
          )
        : null
>>>>>>> Stashed changes
      }
    </div>
  )
}
