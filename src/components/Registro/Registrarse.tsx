import { Container } from 'react-bootstrap'
import { useState } from 'react';
import Usuario from '../../types/Usuario'
import LoginService from '../../services/LoginService';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistroService from '../../services/RegistroService';

const Registrarse = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState<Usuario>(new Usuario());
    const [txtValidacion, setTxtValidacion] = useState<string>("");


    const registrarse = async () => {

        //pasos para registrarse
        console.log(usuario)

        // if (usuario?.rol == undefined || usuario?.rol === "") {
        //     setTxtValidacion("Ingrese el rol");
        //     return;
        // }

        if (usuario?.email == undefined || usuario?.email === "") {
            setTxtValidacion("Ingrese el nombre de usuario");
            return;
        }
        if (usuario?.claveEncriptada == undefined || usuario?.claveEncriptada === "") {
            setTxtValidacion("Ingrese la clave");
            return;
        }


        //hacer la llamada al endpoint para registrarse

        RegistroService.addUsuario(usuario)
            .then(usuarioCreado => {
                console.log('Usuario creado:', usuarioCreado);
                alert("Usuario creado exitosamente!");
                navigate('/login');
            })
            .catch(error => {
                console.error('Error al crear el usuario:', error);
                setTxtValidacion("Hubo un error al crear el usuario.");
            });


    }

    // const [rol, setRol] = useState<string>('');

    // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setRol(event.target.value);
    //     usuario.rol = event.target.value;
    //     setUsuario(usuario);
    // };

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <div className="border p-4 bg-light shadow-sm rounded" style={{ width: '100%', maxWidth: '400px' }}>
                    <h2 className="text-center mb-4">Registrarse</h2>
                    <Form style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* <Form.Group controlId="roleSelect">
                            <Form.Label>Rol</Form.Label>
                            <Form.Control
                                as="select"
                                value={usuario.rol}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>--Selecciona un rol--</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </Form.Control>
                        </Form.Group> */}
                        <Form.Group controlId="usuario">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={usuario.email}
                                onChange={e => usuario.email = String(e.target.value)}
                                placeholder="Ingresa un nombre de usuario"
                            />
                        </Form.Group>
                        <Form.Group controlId="contraseña" className="mt-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                defaultValue={usuario.claveEncriptada}
                                onChange={e => usuario.claveEncriptada = String(e.target.value)}
                                placeholder="Ingresa una contraseña"
                            />
                        </Form.Group>
                        <Button onClick={registrarse} type="button" className="w-100 mt-4">
                            Registrarse
                        </Button>
                        <div>
                            <p style={{ color: 'red', lineHeight: 5, padding: 5 }}>{txtValidacion}</p>
                        </div>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Registrarse