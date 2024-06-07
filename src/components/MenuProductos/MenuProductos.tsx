import styles from "../Menu/Menu.module.css"
import { Link, useLoaderData } from "react-router-dom"
import { useEffect, useState } from "react";
import { ArticuloManufacturadoService } from "../../services/ArticuloManufacturadoService";
import { ArticuloManufacturado } from "../../types/Articulos/ArticuloManufacturado";
import { ArticuloInsumoService } from "../../services/ArticuloInsumoService";
import { ArticuloInsumo } from "../../types/Articulos/ArticuloInsumo";
import { Categoria } from "../../types/Articulos/Categoria";
import { CategoriaService } from "../../services/CategoriaService";
import { getSucursal } from "../Header/Header";
import { LoaderFunction } from "react-router-dom";
import { BotonVolver } from "../BotonVolver/BotonVolver";

export const MenuProductos = () => {
  const [productos, setProductos] = useState<ArticuloManufacturado[]>([]);
  const [otros, setOtros] = useState<ArticuloInsumo[]>([]);
  const categoria: Categoria = useLoaderData() as Categoria;

  const insumoService = new ArticuloInsumoService();
  const service = new ArticuloManufacturadoService();

  const idSucursal = getSucursal();

  useEffect(() => {
    if (categoria.esInsumo) {
      insumoService.getByCategoria(String(categoria?.denominacion), Number(idSucursal)).then((data) => {
        data != undefined ? setOtros(data) : setOtros([])
      });
    } else {
      service.getByCategoria(String(categoria?.denominacion), Number(idSucursal)).then((data) => (
        data != undefined ? setProductos(data) : setProductos([])
      ));
    }
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <p></p>
        <BotonVolver />
      </div>
      <div className={styles.menu}>
        {productos.length != 0 ?
          productos.map((producto: ArticuloManufacturado) =>
            <Link key={producto.id} to={`/detalle/${producto.id}`} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={producto.imagenes? producto.imagenes[0].url:""} />
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
                  <img src={otro.imagenes? otro.imagenes[0].url: ""} />
                </div>
                {otro.denominacion}
              </Link>
            )
            : null
        }
      </div>
    </div>
  )
}


type ReferralParams = {
  id?: string;
}

export const menuProductosLoader: LoaderFunction = async ({params}) => {
  const { id } = params as ReferralParams;
  const service = new CategoriaService();

  if(id) {
    var res = await service.getById(Number(id));
    return res;
  } else {
    return {id:0, eliminado:false, denominacion:"", esInsumo: false}
  }
}

export default MenuProductos;