import styles from "../Menu/Menu.module.css"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { ArticuloManufacturadoService } from "../../services/ArticuloManufacturadoService";
import { ArticuloManufacturado } from "../../types/Articulos/ArticuloManufacturado";

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
      { productos.length != 0 ? 
          productos.map((producto: ArticuloManufacturado) => 
            <Link key={producto.id} to={`detalle/${producto.id}`} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={producto.imagenes[0].url} />
              </div>
              {producto.denominacion}
            </Link>
          )
        : null
      }
    </div>
  )
}
