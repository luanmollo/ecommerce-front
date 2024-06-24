import { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, Row } from "react-bootstrap";
// import { Pais } from "../../../types/Domicilio/Pais";
// import { paisesLoader } from "../../AdminDashboard/DomicilioCrud/PaisesCrud";
// import { Provincia } from "../../../types/Domicilio/Provincia";
// import { getProvinciasPorPaisId } from "../../AdminDashboard/DomicilioCrud/ProvinciasCrud";
// import { Localidad } from "../../../types/Domicilio/Localidad";
// import { getLocalidadesPorProvinciaId } from "../../AdminDashboard/DomicilioCrud/LocalidadesCrud";
import { Localidad } from "../../types/Domicilio/Localidad";
import { Pais } from "../../types/Domicilio/Pais";
import { Provincia } from "../../types/Domicilio/Provincia";
import { getLocalidadesPorProvinciaId } from "../DomicilioCrud/LocalidadesCrud";
import { paisesLoader } from "../DomicilioCrud/PaisesCrud";
import { getProvinciasPorPaisId } from "../DomicilioCrud/ProvinciasCrud";
import { DomicilioService } from "../../services/DomicilioService";
import { DomicilioCliente } from "../../types/Domicilio/DomicilioCliente";
import { useLoaderData } from "react-router-dom";
import Cliente from "../../types/Cliente";



export const DomicilioForm = ({ closeModal }: { closeModal: () => void }) => {
    const [paises, setPaises] = useState<Pais[]>([]);
    const [paisSelected, setPaisSelected] = useState('');

    const [provincias, setProvincias] = useState<Provincia[]>([]);
    const [provinciaSelected, setProvinciaSelected] = useState('');


    const [localidades, setLocalidades] = useState<Localidad[]>([]);
    const [localidadSelected, setLocalidadSelected] = useState('');

    const cliente = useLoaderData() as Cliente;
    // const [domicilio, setDomicilio] = useState<Domicilio>();

    const [domicilio, setDomicilio] = useState<DomicilioCliente>({
        calle: '',
        numero: 0,
        cp: 0,
        piso: 0,
        nroDpto: 0,
        localidad: {
            id: 0,
            nombre: '',
            provincia: {
                id: 0,
                nombre: '',
                pais: {
                    id: 0,
                    nombre: '',
                    eliminado: false
                },
                eliminado: false
            },
            eliminado: false
        },
        idClientes: [cliente.id],
    });

    useEffect(() => {
        const loadPaises = async () => {
            const paises = await paisesLoader();
            setPaises(paises);
        };
        loadPaises();

    }, [localidadSelected]);


    useEffect(() => {
        if (paisSelected) {
            const loadProvincias = async () => {
                const provincias = await getProvinciasPorPaisId(parseInt(paisSelected));
                setProvincias(provincias);
            };
            loadProvincias();
        }
    }, [paisSelected]);


    useEffect(() => {
        if (provinciaSelected) {

            const loadLocalidades = async () => {
                const localidades = await getLocalidadesPorProvinciaId(parseInt(provinciaSelected));
                setLocalidades(localidades);
            };
            loadLocalidades();
        }
    }, [provinciaSelected]);





    const handlePaisChange = async (event: { target: { value: any; }; }) => {
        const selectedPaisId = event.target.value;
        const selectedPais = paises.find((p) => p.id == selectedPaisId);
        if (selectedPais && selectedPais.nombre) {

            setPaisSelected(selectedPais.id.toString());
            const prov: Provincia[] = await getProvinciasPorPaisId(selectedPais.id);
            setProvincias(prov);


        }
    }


    const handleProvinciaChange = async (event: { target: { value: any; }; }) => {
        const selectedProvinciaId = event.target.value;
        const selectedProvincia = provincias.find((p) => p.id == selectedProvinciaId);
        if (selectedProvincia && selectedProvincia.nombre) {

            setProvinciaSelected(selectedProvincia.id.toString());
            const loc = await getLocalidadesPorProvinciaId(selectedProvincia.id);
            setLocalidades(loc);


        }
    }

    const handleLocalidadChange = async (event: { target: { value: any; }; }) => {
        const selectedLocalidadId = event.target.value;
        const selectedLocalidad = localidades.find((l) => l.id == selectedLocalidadId);
        if (selectedLocalidad && selectedLocalidad.nombre) {

            setLocalidadSelected(selectedLocalidad.id.toString());

        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDomicilio(prevDomicilio => ({
            ...prevDomicilio,
            [name]: value
        }));
    };

    const submitForm = async () => {
        console.log(domicilio);

        const paisEncontrado = paises.find((p) => p.id === parseInt(paisSelected));
        const provinciaEncontrada = provincias.find((pr) => pr.id === parseInt(provinciaSelected));
        const localidadEncontrada = localidades.find((l) => l.id === parseInt(localidadSelected));

        if (localidadEncontrada) {
            setDomicilio(prevDomicilio => ({
                ...prevDomicilio,
                localidad: localidadEncontrada
            }));
        }



        if ((domicilio?.calle?.trim() === '' || domicilio?.calle === null) ||
            (domicilio?.numero === null) ||
            (domicilio?.cp === null) ||
            (domicilio?.piso === null) ||
            (domicilio?.nroDpto === null)) {
            alert("Por favor completa todos los campos.");
            return;
        }

        if (paisEncontrado && provinciaEncontrada && localidadEncontrada) {
            console.log("domicilio correcto");


        } else {
            alert("Debes completar la dirección.");
            return;
        }

        console.log(domicilio);
        console.log(JSON.stringify(domicilio));

        //enviar form

        const domicilioService: DomicilioService = new DomicilioService();
        const newDomicilio = await domicilioService.createDomicilio(domicilio);

        console.log(newDomicilio);
        if(newDomicilio){
            alert("Domicilio creado con éxito!");
            closeModal();
        }



    }

    return (
        <div>
            <Form style={{ display: 'flex', flexDirection: 'column' }}>

                <h6>Domicilio</h6>
                <Form.Group as={Row} className="mb-2" controlId="domicilio.calle">
                    <Form.Label column sx={2}>Calle: </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="calle"
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>
                <Row>
                    <Form.Group as={Col} className="mb-2" controlId="domicilio.numero">
                        <Form.Label>Número: </Form.Label>
                        <Form.Control
                            type="text"
                            name="numero"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-2" controlId="domicilio.cp">
                        <Form.Label>Código Postal: </Form.Label>
                        <Form.Control
                            type="text"
                            name="cp"
                            onChange={handleChange}
                        />

                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} className="mb-2" controlId="domicilio.piso">
                        <Form.Label>Piso: </Form.Label>
                        <Form.Control
                            type="text"
                            name="piso"
                            onChange={handleChange}
                        />

                    </Form.Group>
                    <Form.Group as={Col} className="mb-2" controlId="domicilio.nroDpto">
                        <Form.Label>Número de dpto: </Form.Label>
                        <Form.Control
                            type="text"
                            name="nroDpto"
                            onChange={handleChange}
                        />
                    </Form.Group>

                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="domicilio.localidad.provincia.pais.id">
                        <Form.Label>País</Form.Label>
                        <Form.Select name="domicilio.localidad.provincia.pais.id" value={paisSelected} onChange={handlePaisChange}>
                            <option value="0">Elija un país</option>
                            {paises.map((pais) => (
                                <option key={pais.id} value={pais.id}>
                                    {pais.nombre}
                                </option>
                            ))}
                        </Form.Select>


                    </Form.Group>
                    <Form.Group as={Col} controlId="domicilio.localidad.provincia.id">
                        <Form.Label>Provincia</Form.Label>
                        <Form.Select name="domicilio.localidad.provincia.id" value={provinciaSelected} onChange={handleProvinciaChange}>
                            <option value="0">Elija una provincia</option>
                            {provincias.map((provincia) => (
                                <option key={provincia.id} value={provincia.id}>
                                    {provincia.nombre}
                                </option>
                            ))}
                        </Form.Select>

                    </Form.Group>
                    <Form.Group as={Col} controlId="domicilio.localidad.id">
                        <Form.Label name="localidad">Localidad</Form.Label>
                        <Form.Select name="domicilio.localidad.id" value={localidadSelected} onChange={handleLocalidadChange}>
                            <option value="0">Elija una localidad</option>
                            {localidades.map((localidad) => (
                                <option key={localidad.id} value={localidad.id}>
                                    {localidad.nombre}
                                </option>
                            ))}
                        </Form.Select>

                    </Form.Group>
                </Row>
                <Button type="button" onClick={submitForm} className="save-button" >GUARDAR</Button>
            </Form>
        </div>
    )
}