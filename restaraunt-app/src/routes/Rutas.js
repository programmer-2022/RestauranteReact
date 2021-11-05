import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "../pages/home/Home"
import Menu from "../pages/menu/Menu"

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/menu" element={<Menu/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default Rutas
