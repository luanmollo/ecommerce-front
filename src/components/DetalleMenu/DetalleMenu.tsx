<<<<<<< Updated upstream
import { Form } from "react-router-dom"
import { BotonAgregar } from "../BotonAgregar/BotonAgregar"
=======
import { Row, Col, Modal, ModalHeader, ModalTitle, ModalBody } from "react-bootstrap"
>>>>>>> Stashed changes
import { BotonVolver } from "../BotonVolver/BotonVolver"
import styles from "../DetalleMenu/DetalleMenu.module.css"
import { GenericGallery } from "../GenericGallery/GenericGallery"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ArticuloManufacturado } from "../../types/ArticuloManufacturado"
import { ArticuloManufacturadoService } from "../../services/ArticuloManufacturadoService"

export const DetalleMenu = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState<ArticuloManufacturado | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [cantidad, setCantidad] = useState<number>(0);

  const service = new ArticuloManufacturadoService();

  useEffect(() => {
    service.getById(Number(id)).then((data) => {
        data != undefined ? setProducto(data) : setProducto(null)
    });
  }, [])

  const handleAdd = () => {
    setShowModal(true);
  };

  const addCantidad = () => {
    var aux: number = cantidad + 1;
    setCantidad(aux);
  };

  const substractCantidad = () => {
    if(cantidad > 0) {
        var aux: number = cantidad - 1;
        setCantidad(aux);
    }
  };

  return (
    <div className={styles.container}>
<<<<<<< Updated upstream
      <div className={styles.mainBox}>
        <div className={styles.header}>
          <p>COD</p>
          <p>DENOMINACION</p>
          <p>CANTIDAD</p>
          <BotonVolver />
        </div>


        <div className={styles.row}>
          <p>123</p>
          <p>pizza</p>
          <input className={styles.inputNumber}
            type="number"
            name="cantidad"
            defaultValue="1"
          />
          <BotonAgregar />
        </div>
      </div>
=======
        {
        producto? 
            <div className={styles.mainBox}>
                <div className={styles.header}>
                    <p>{producto?.denominacion}</p>
                    <BotonVolver />
                </div>
                <div className={styles.body}>
                    <Row>
                        <Col>
                            <GenericGallery imagenes={producto?.imagenes}></GenericGallery>
                        </Col>
                        <Col>
                            {producto?.descripcion}
                        </Col>
                    </Row>
                    <Row className={styles.addToCart} >
                        <button type="button" onClick={handleAdd}>+</button>
                    </Row>
                </div>
            </div>
        : null
        }
        <Modal show={showModal}>
            <ModalHeader>
                <ModalTitle>Añadir {producto?.denominacion} al carrito</ModalTitle>
            </ModalHeader>
            <ModalBody>
                Elija la cantidad: 
                <div className={styles.addToCart}>
                    <button type="button" onClick={substractCantidad}>-</button>
                    <p>{cantidad}</p>
                    <button type="button" onClick={addCantidad}>+</button>
                </div>
            </ModalBody>
        </Modal>
>>>>>>> Stashed changes
    </div>
  )
}
