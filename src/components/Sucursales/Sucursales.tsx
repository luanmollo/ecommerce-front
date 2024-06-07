import styles from "../Menu/Menu.module.css"
import { Link, useParams } from "react-router-dom"
import { Sucursal } from "../../types/Empresa/Sucursal"
import { useEffect, useState } from "react"
import { SucursalService } from "../../services/SucursalService"
import { BotonVolver } from "../BotonVolver/BotonVolver"

export const Sucursales = () => {
  const { id } = useParams();
  const [sucursales, setSucursales] = useState<Sucursal[]>();
  const service = new SucursalService();

  useEffect(() => {
    service.getByEmpresaId(Number(id)).then((data) => 
      data!=undefined ? setSucursales(data) : setSucursales([])
    );
  }, []);

  const handleSelect = (id: number) => {
    localStorage.setItem("sucursalId", String(id))
  }

  return (
    <div>
      <div className={styles.header}>
        <p>Seleccione una sucursal</p>
        <BotonVolver/>
      </div>
      <div className={styles.menu}>
        { sucursales?.length!=0 ?
            sucursales?.map((sucursal: Sucursal) => (
              <Link key={sucursal.id} to={`/menu/${sucursal.id}`} className={styles.card} onClick={() => handleSelect(sucursal.id)}>
                <div className={styles.imgBox} >
                  <img src={`/src/img/${sucursal.logo}`} />
                </div>
                {sucursal.nombre}<br/>
              </Link>
            ))
            : null
        }
      </div>
    </div>
  )
}
  
export default Sucursales;