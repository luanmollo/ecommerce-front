import { Navigate, Outlet } from 'react-router-dom';
import { Roles } from '../types/Roles';
import Usuario from '../types/Usuario';
import { useState } from 'react';

interface Props{
    rol:Roles;
}

function RolUsuario ( {rol}:Props ) {
    const [jsonUsuario, setJsonUsuario] = useState<any>(localStorage.getItem('usuario'));
    const usuarioLogueado:Usuario = JSON.parse(jsonUsuario) as Usuario;
    console.log(usuarioLogueado)
    if(usuarioLogueado && usuarioLogueado.rol === rol){
        return <Outlet></Outlet>;
    }else if(usuarioLogueado){
        console.log("grilla?")
        return <Navigate replace to='/' />;
        
    }else{
        console.log("login?")
        return <Navigate replace to='/login' />;
        
    }
}
export default RolUsuario;