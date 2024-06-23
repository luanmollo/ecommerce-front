import Usuario from "../types/Usuario";

const BASE_URL = "http://localhost:8092/";

export const RegistroService = {

    //registrar usuario
    addUsuario: async (user: Usuario): Promise<Usuario> => {
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
