import styles from "../Menu/Menu.module.css"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { ArticuloManufacturadoService } from "../../services/ArticuloManufacturadoService";
import { ArticuloManufacturado } from "../../types/Articulos/ArticuloManufacturado";
import { ArticuloInsumoService } from "../../services/ArticuloInsumoService";
import { ArticuloInsumo } from "../../types/Articulos/ArticuloInsumo";

export const SubMenu = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState<ArticuloManufacturado[]>([]);
  const [otros, setOtros] = useState<ArticuloInsumo[]>([]);

  const insumoService = new ArticuloInsumoService();
  const service = new ArticuloManufacturadoService();

  useEffect(() => {
    service.getByCategoria(Number(id)).then((data) => (
      data != undefined ? setProductos(data) : setProductos([])
    ));
    insumoService.getByCategoria(Number(id)).then((data) => {
      data!=undefined ? setOtros(data) : setOtros([])
    });
  }, []);

  return (
    <div className={styles.menu}>
      { productos.length != 0 ? 
          productos.map((producto: ArticuloManufacturado) => 
            <Link key={producto.id} to={`/detalle/${producto.id}`} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={producto.imagenes[0].url} />
              </div>
              {producto.denominacion}
            </Link>
          )
        : null
      }
      {
        otros.length != 0 ?
          otros.map((otro: ArticuloInsumo) => 
            <Link key={otro.id} to={`/detalle/otro/${otro.id}`} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={otro.imagenes[0].url} />
              </div>
              {otro.denominacion}
            </Link>
          )
        : null
      }
    </div>
  )
}
