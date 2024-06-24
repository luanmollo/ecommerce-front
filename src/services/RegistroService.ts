import UsuarioCliente from "../types/UsuarioCliente";

const BASE_URL = "http://localhost:8092/";

export const RegistroService = {

    //registrar usuario
    addUsuarioCliente: async (user: UsuarioCliente): Promise<UsuarioCliente> => {
        const response = await fetch(`${BASE_URL}usuarios/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud de inserción de usuario');
        }

        const data = await response.json();
        return data;
    }
}

export default RegistroService;
