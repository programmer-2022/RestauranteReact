import React from 'react'
import {Route, Routes} from "react-router-dom"

import Home from "../pages/home/Home"

const Rutas = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            {/* <Route exact path="/menu" element={<Menu/>} /> */}
        </Routes>
    )
}

export default Rutas