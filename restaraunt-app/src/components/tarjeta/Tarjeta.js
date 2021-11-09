import React from 'react'
import "./tarjeta.css"

const Tarjeta = (props) => {

	const [contador, setContador] = React.useState(0)
	const sumar = () => {setContador(contador + 1)
	}
	const restar = () => {setContador(contador - 1)
	}

	const [cant, setCant] = React.useState(0)

	const [id, setId] = React.useState(props.id)

	const agregar = (e) => {
		setId(e.target.id)
		props.agregar(contador, id)
	}

	return (
		<>
			<div className="contenedorTarjeta">
				<div className="imagen">
					<img src={props.img} alt="imagen"/>
				</div>
				
				<div className="contenedorInfo" >
					<h3>{props.titulo}</h3>
					<p>{props.descripcion}</p>
					<h4>{props.precio}</h4>
				</div>
				<div className="contenedorCantidad">
					<p>CANTIDAD</p>
					<div className="contador">
						<button onClick = {restar}>-</button>
				
						<input type="text" value={contador} readOnly></input>
						
						<button onClick = {sumar}>+</button>
					</div>
					<button onClick = {agregar} id={props.id}>Agregar al carrito</button>
				</div>
			</div>
		</>
	)
}

export default Tarjeta