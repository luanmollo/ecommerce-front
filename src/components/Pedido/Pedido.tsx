import { useEffect, useState } from "react";
import { ArticuloManufacturado } from "../../types/Articulos/ArticuloManufacturado";

export const Pedido = () => {

    const [pedido, setPedido] = useState<ArticuloManufacturado[]>([]);


    useEffect(() => {



    }, []);

    const [section, setSection] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        pickup: false,
        paymentMethod: ''
    });

    const handleNextSection = () => {
        if (section === 1 && (!formData.name || !formData.phone || !formData.address)) {
            alert('Por favor completa todos los campos antes de continuar.');
            return;
        }

        setSection(section + 1);
    };

    const handlePrevSection = () => {
        setSection(section - 1);
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {


        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!formData.paymentMethod) {
            alert('Por favor completa todos los campos antes de continuar.');
            return;
        }

        // Manejar el envío del formulario
        console.log('Formulario enviado', formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="container w-50">
                {section === 1 && (
                    <div>
                        <h2>Datos del Cliente</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                className="form-control"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Domicilio</label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                className="form-control"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                )}

                {section === 2 && (
                    <div>
                        <h2>Método de Entrega</h2>
                        <div className="mb-3">
                            <label className="form-check-label">¿Retira el pedido en el local?</label>
                            <input
                                id="pickup"
                                name="pickup"
                                type="checkbox"
                                className="form-check-input"
                                checked={formData.pickup}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                )}

                {section === 3 && (
                    <div>
                        <h2>Método de Pago</h2>
                        <div className="mb-3">
                            <label htmlFor="paymentMethod" className="form-label">Forma de Pago</label>
                            <select
                                id="paymentMethod"
                                name="paymentMethod"
                                className="form-select"
                                value={formData.paymentMethod}
                                onChange={handleChange}
                            >
                                <option value="" label="Seleccione método de pago" />
                                {formData.pickup ?
                                    <option value="cash" label="Efectivo (10% de descuento)" />
                                    :
                                    <option value="mercadoPago" label="MercadoPago" />
                                }
                            </select>
                        </div>
                    </div>
                )}

                <div className="mb-3">
                    {section > 1 && (
                        <button type="button" className="btn btn-primary" onClick={handlePrevSection}>Volver</button>
                    )}
                    {section < 3 ? (
                        <button type="button" className="btn btn-primary" onClick={handleNextSection}>Continuar</button>
                    ) : (
                        <button type="submit" className="btn btn-primary">Finalizar Pago</button>
                    )}
                </div>
            </form>

        </>
    )
}