import React, {useEffect, useState} from 'react'

export default function Carrito() {

    const [items, setItems] = useState([])

    return (
        <>
        {
            (items.length === 0)
                ? (<span>Carrito Vacío</span>)
                : (<span>10</span>)
        }
        </>       
    )
}
