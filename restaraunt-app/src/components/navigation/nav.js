import React from 'react'
import { Link } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faHome, faUtensils, faPhone, faUsers, faCalendarCheck, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark opacity-85 p-3">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand" aria-current="page">Sal&Salsa</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item fs-5 me-3">
                        <Link to="/" className="nav-link active" aria-current="page"><FontAwesomeIcon icon={faHome} /> Inicio</Link>
                    </li>
                    <li className="nav-item fs-5 me-3">
                        <Link to="/menu" className="nav-link"><FontAwesomeIcon icon={faUtensils} /> El Menú</Link>
                    </li>
                    <li className="nav-item fs-5 me-3">
                        <Link to="/reservas" className="nav-link"><FontAwesomeIcon icon={faCalendarCheck} /> Reservas</Link>
                    </li>
                    <li className="nav-item fs-5 me-3">
                        <Link to="/contacto" className="nav-link"><FontAwesomeIcon icon={faPhone} /> Contacto</Link>
                    </li>
                    <li className="nav-item fs-5 me-3">
                        <Link to="/nosotros" className="nav-link"><FontAwesomeIcon icon={faUsers} /> Nosotros</Link>
                    </li>
                    <li className="nav-item fs-5">
                        <Link to="/carrito" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /> <span>Carrito vacío</span></Link>
                    </li>                    
                    <li className="nav-item dropdown fs-5">
                        <Link to="/login" className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon={faSignInAlt} /> Iniciar sesión</Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link to="/perfil" className="dropdown-item">Perfil</Link></li>
                            <li><Link to="/detalle" className="dropdown-item">Órdenes de compra</Link></li>
                            <li><Link to="/carrito" className="dropdown-item">Carrito de compras</Link></li>
                            <li><Link to="/logout" className="dropdown-item">Cerrar sesión</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>            
        </div>
    </nav>
  );  
}
