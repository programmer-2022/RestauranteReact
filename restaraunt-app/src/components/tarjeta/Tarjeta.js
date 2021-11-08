import React from 'react'
import "./tarjeta.css"

const Tarjeta = (props) => {
	return (
		<>
			<div className="contenedorTarjeta">
				<div className="imagen">
					<img src={props.img} alt="imagen"/>
				</div>
				
				<div className="contenedorInfo">
					<h3>{props.titulo}</h3>
					<p>{props.descripcion}</p>
					<h4>{props.precio}</h4>
				</div>
				<div className="contenedorCantidad">
					<p>hola</p>
				</div>
			</div>
		</>
	)
}

export default Tarjeta