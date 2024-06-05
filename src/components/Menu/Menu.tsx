import styles from "../Menu/Menu.module.css"
import imagen from "../../img/logoBackgroundRemoved.png"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Categoria } from "../../types/Categoria"
import { CategoriaService } from "../../services/CategoriaService"

export const Menu = () => {
  const { id } = useParams();
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const service = new CategoriaService();

  useEffect(() => {
    service.getBySucursalId(Number(id)).then((data) => 
      data != undefined ? setCategorias(data) : setCategorias([])
    );
  }, []);

  return (
    <div className={styles.menu}>
<<<<<<< Updated upstream
      {
        <>

          <Link to="/cat" className={styles.card}>
            <div className={styles.imgBox}><img src={imagen}></img></div>
            CATEGORIA A
          </Link>

          <Link to="/cat" className={styles.card}>
            <div className={styles.imgBox}><img src={imagen}></img></div>
            CATEGORIA B
          </Link>

          <Link to="/cat" className={styles.card}>
            <div className={styles.imgBox}><img src={imagen}></img></div>
            CATEGORIA C
          </Link>


        </>


=======
      { categorias.length != 0 ?
          categorias.map((categoria: Categoria) => (
            <Link key={categoria.id} to={`cat/${categoria.id}`} className={styles.card}>
              <div className={styles.imgBox} >
                <img src={imagen} />
              </div>
              {categoria.denominacion}
            </Link>
          ))        
        : null
>>>>>>> Stashed changes
      }
    </div>


  )
}
