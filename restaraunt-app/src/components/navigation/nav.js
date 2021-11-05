import React from 'react'
import {useHistory} from "react-router-dom"
import Rutas from "../../routes/Rutas"


export default function Nav() {

    const his = useHistory();

  return (
    /*<nav className="navbar navbar-expand-lg navbar-dark bg-dark opacity-85 p-3">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Sal&Salsa</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item fs-5">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item fs-5">
                        <a className="nav-link" href="/menu">El Menú</a>
                    </li>
                    <li className="nav-item fs-5">
                        <a className="nav-link" href="#">Reservas</a>
                    </li>
                    <li className="nav-item fs-5">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <li className="nav-item fs-5">
                        <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item dropdown fs-5">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Iniciar sesión
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Perfil</a></li>
                            <li><a className="dropdown-item" href="#">Órdenes de compra</a></li>
                            <li><a className="dropdown-item" href="#">Carrito de compras</a></li>
                            <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>*/
    <>
    <button onClick={() => {
        his.push("/")
    }}>presionar</button>
    
    </>
  );
  
}
