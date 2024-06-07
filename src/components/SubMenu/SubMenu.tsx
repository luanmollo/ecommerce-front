import styles from "../Menu/Menu.module.css"
import imagen from "../../img/logoBackgroundRemoved.png"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Categoria } from "../../types/Articulos/Categoria"
import { BotonVolver } from "../BotonVolver/BotonVolver"
import { CategoriaService } from "../../services/CategoriaService"

export const SubMenu = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [subCategorias, setSubCategorias] = useState<Categoria[]>([]);

  const service = new CategoriaService();

  const loadSubCateorias = async () =>{
    var catPadre = await service.getById(Number(id));
    if(catPadre?.subCategorias) setSubCategorias(catPadre?.subCategorias);
  }

  useEffect(() => {
    loadSubCateorias();
  }, []);

  const handleClickCategoria = (cat: Categoria) => {
    if(cat.subCategorias?.length!=0) {
      navigate(`/subMenu/${cat.id}`)
    } else {
      navigate(`/productos/${cat.id}`);
    }
  }

  return (
    <div>
      <div className={styles.header}>
        <p></p>
        <BotonVolver/>
      </div>
      <div className={styles.menu}>
        { subCategorias.length != 0 ?
            subCategorias.map((categoria: Categoria) => (
              <div onClick={() => handleClickCategoria(categoria)} key={categoria.id} className={styles.card}>
                <div className={styles.imgBox} >
                  <img src={imagen} />
                </div>
                {categoria.denominacion}
              </div>
            ))        
          : null
        }
      </div>
    </div>
  )
}

export default SubMenu;