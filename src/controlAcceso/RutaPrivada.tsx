import { ReactNode, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Usuario from '../types/Usuario';

export const RutaPrivada = ({ children }: { children: ReactNode }) => {
	
    const [usuario, setUsuario] = useState<Usuario>(localStorage.getItem('usuario') as unknown as Usuario);
    console.log(usuario)
	return usuario ? children : <Navigate to='/login' />;
};