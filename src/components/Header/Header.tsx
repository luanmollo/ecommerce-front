import { Link, useNavigate } from "react-router-dom"
import styles from "../Header/Header.module.css"
import logo from "../../img/logoNoName.png"
/*import { Form } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Sucursal } from "../../types/Empresa/Sucursal"
import { SucursalService } from "../../services/SucursalService"*/

export const getEmpresa = () => {
  return localStorage.getItem("empresaId");
}

export const getSucursal = () => {
  return localStorage.getItem("sucursalId");
}

export const Header = () => {

  const navigate = useNavigate();
  //const [sucursales, setSucursales] = useState<Sucursal[]>();
  //const service = new SucursalService();

  /*useEffect(() => {
    var idEmpresa: number = Number(getEmpresa());

    service.getByEmpresaId(Number(idEmpresa)).then((data) => {
      data != undefined ? setSucursales(data) : setSucursales([])
    });

    console.log(sucursales);
  }, [localStorage.getItem("empresaId")]);*/

  /*const handleSelected = (value: string) => {
    localStorage.setItem("sucursalId", value);
  }*/

   const handleBrandClick = () => {
    localStorage.removeItem("empresaId");
    localStorage.removeItem("sucursalId");
    navigate("/");
   }

  return (
    <div className={styles.header}>
        <div className={styles.brand} onClick={handleBrandClick}>
          <img className={styles.logo} src={logo}/>
          El Buen Sabor
        </div>
        {/*getEmpresa() != null ?
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
            */}
        { getSucursal()? 
          <div className={styles.links}>
            <Link to={`menu/${getSucursal()}`}>Menu</Link>
            <Link to="carrito">Carrito</Link>
          </div>
          :null
        }
    </div>
  )
}
