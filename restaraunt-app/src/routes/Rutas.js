import React from 'react'
import {Route, Routes} from "react-router-dom"

import Home from "../pages/home/Home"
import Nosotros from "../pages/nosotros/Nosotros"

const Rutas = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/nosotros" element={<Nosotros/>} />
        </Routes>
    )
}

export default Rutas