import styles from "../Menu/Menu.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Empresa } from "../../types/Empresa/Empresa"
import { EmpresaService } from "../../services/EmpresaService"

export const Empresas = () => {

  const [empresas, setEmpresas] = useState<Empresa[]>();
  const service = new EmpresaService();

  useEffect(() => {
    service.getAll().then((data) =>
      data!=undefined ? setEmpresas(data) : setEmpresas([])
    )
  }, []);

  const handleSelect = (id: number) => {
    localStorage.setItem("empresaId", String(id));
  }

  return (
    <div>
      <div className={styles.header}>
        Seleccione una empresa
      </div>
      <div className={styles.menu}>
        {
          empresas?.length!=0 ?
            empresas?.map((empresa: Empresa) => (
              <Link key={empresa.id} to={`sucursales/${empresa.id}`} className={styles.card} onClick={() => handleSelect(empresa.id)}>
                <div className={styles.imgBox} >
                  <img src={`src/img/${empresa.logo}`} />
                </div>
                <p>{empresa.nombre}</p>
              </Link>
            ))
          :null
        }
      </div>
    </div>
  )
}
  