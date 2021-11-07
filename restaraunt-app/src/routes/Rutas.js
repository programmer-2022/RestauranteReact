import React from 'react'
import {Route, Routes} from "react-router-dom"

import Home from "../pages/home/Home"
import Contacto from "../pages/contacto/Contacto"
import Reservas from "../pages/reservas/Reservas"

const Rutas = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/contacto" element={<Contacto/>} /> 
            <Route exact path="/reservas" element={<Reservas/>} /> 
        </Routes>
    )
}

export default Rutas