import React, { useState } from 'react';
import { Button, Modal, Form, ModalBody } from 'react-bootstrap';
import './HistorialPedidosContent.css';
import { Link, Navigate } from 'react-router-dom';

const HistorialPedidosContent = ({ estado = '', id = 0, fechaPedido = '', horaEstimadaFinalizacion = '' }) => {

  const descargarFactura = (id: number) => {
    window.open("http://localhost:8092/facturas/facturaPdf/" + id, "_blank");
  }

  return (
    <>

      <div className="content_div">
        <div className="detalles_div" id="grilla_container">
          <p>{id}</p>
          <p>{estado}</p>
          <p>{fechaPedido}</p>
          <p>{horaEstimadaFinalizacion}</p>
          <a className='btn btn-primary' onClick={() => descargarFactura(id)}>Descargar Factura</a>

        </div>
      </div>

    </>
  );
};

export default HistorialPedidosContent;
