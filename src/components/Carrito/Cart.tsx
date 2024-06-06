import { Button, Col, Row } from "react-bootstrap"
import { BotonVolver } from "../BotonVolver/BotonVolver"
import styles from "../Carrito/Cart.module.css"
import { useCarrito } from "../../hooks/useCarrito"
import { DetallePedido } from "../../types/Pedidos/DetallePedido"
import { useNavigate } from "react-router-dom"
import formatPrice from "../../types/format/priceFormat"
import { calcularTotal } from "../../types/Pedidos/Pedido"

export const Carrito = () => {
  const carrito = useCarrito();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <div className={styles.header}>
          <p>Mi Carrito</p>
          <BotonVolver />
        </div>
        {
          carrito.cart.length!=0 ?
            <div className={styles.table}>
              <Row>
                <Col className={styles.tdata}>
                  <p>CÓDIGO</p>
                </Col>
                <Col className={styles.tdata}>
                  <p>ARTICULO</p>
                </Col>
                <Col className={styles.tdata}>
                  <p>CANTIDAD</p>
                </Col>
                <Col className={styles.tdata}>
                  <p>SUBTOTAL</p>
                </Col>
                <Col className={styles.tdata}>
                  <p>REMOVER</p>
                </Col>
                <hr/>
              </Row>
            {
              carrito.cart.map((detalle: DetallePedido, index: number) =>
                <Row key={index}>
                  <Col>
                    {detalle.articulo.codigo}
                  </Col>    
                  <Col>
                    {detalle.articulo.denominacion}
                  </Col>
                  <Col>
                    {detalle.cantidad}
                  </Col>
                  <Col>
                    {formatPrice(detalle.subTotal)}
                  </Col>
                  <Col>
                    <Button className="mb-3" variant="danger" onClick={() => carrito.removeItemCart(detalle)}>
                      Quitar del carrito
                    </Button>
                  </Col>
                  <hr />
                </Row>
              )
            }
              <Row className={styles.row}>
                <Col>
                  <p className={styles.total}>TOTAL: {formatPrice(calcularTotal(carrito.cart))}</p>
                </Col>
                <Col>
                  <Button className="mb-4" variant="success" onClick={() => navigate("")}>
                    COMPRAR
                  </Button>
                </Col>
              </Row>
            </div>
          : 
          <div className={styles.vacio}>
            <p>No hay productos en el carrito</p>
          </div>
        }
      </div>
    </div>
  )
}
