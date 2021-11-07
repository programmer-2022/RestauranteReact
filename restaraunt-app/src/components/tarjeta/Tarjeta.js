import React from 'react'

const Tarjeta = (props) => {
	return (
		<>
			<div className="contenedorTarjeta">
				<img src="" alt="imagen"/>
				<div className="contenedorInfo">
					<h3>{props.titulo}</h3>
					<p>{props.descripcion}</p>
					<h4>{props.precio}</h4>
				</div>
			</div>
		</>
	)
}

export default Tarjeta