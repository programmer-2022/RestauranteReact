import React from 'react'
import {Route, Routes} from "react-router-dom"

import Home from "../pages/home/Home"
import Contacto from "../pages/contacto/Contacto"
import Reservas from "../pages/reservas/Reservas"
import Menu from "../pages/menu/Menu"
import Nosotros from "../pages/nosotros/Nosotros"
import Login from "../pages/login/Login.js"

const Rutas = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/menu" element={<Menu/>} /> 
            <Route exact path="/reservas" element={<Reservas/>} /> 
            <Route exact path="/contacto" element={<Contacto/>} /> 
            <Route exact path="/nosotros" element={<Nosotros/>} />
            <Route exact path="/login" element={<Login/>} />
        </Routes>
    )
}

export default Rutas