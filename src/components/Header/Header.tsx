import { Link } from "react-router-dom"
import styles from "../Header/Header.module.css"
import logo from "../../img/logoNoName.png"
import { Form } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Sucursal } from "../../types/Empresa/Sucursal"
import { SucursalService } from "../../services/SucursalService"

export const getEmpresa = () => {
  return localStorage.getItem("empresaId");
}

export const getSucursal = () => {
  return localStorage.getItem("sucursalId");
}

export const Header = () => {

  const [sucursales, setSucursales] = useState<Sucursal[]>();
  const service = new SucursalService();

  useEffect(() => {
    //var idEmpresa: number = Number(getEmpresa());

    service.getAll().then((data) => {
      data != undefined ? setSucursales(data) : setSucursales([])
    });
  }, [localStorage.getItem("empresaId")]);

  const handleSelected = (value: string) => {
    localStorage.setItem("sucursalId", value);
  }

  return (
    <div className={styles.header}>
        <div className={styles.brand}>
          <img className={styles.logo} src={logo}/>
          El Buen Sabor
        </div>
        { getEmpresa() != null ?
          <div className={styles.selectBox}>
            <Form.Select onChange={(e) => handleSelected(e.target.value)}>
              <option value="0">Sucursal</option>
              {
                sucursales?.map((sucursal: Sucursal) => (
                  <option key={sucursal.id} value={sucursal.id}>
                    {sucursal.nombre}
                  </option>
                ))
              }
            </Form.Select>
          </div>
          : null
        }
        <div className={styles.links}>
          <Link to="menu">Menu</Link>
          <Link to="carrito">Carrito</Link>
        </div>
    </div>
  )
}
