import React from 'react'
import Tarjeta from "../../components/tarjeta/Tarjeta"

const Menu = () => {
	return (
		<>
			<div>
				<div>
					<Tarjeta titulo="hola" descripcion="platano grueso y venoso" precio="5000"/>
				</div>
				<div>
					<p>precio</p>
				</div>
			</div>
		</>
	)
}

export default Menu