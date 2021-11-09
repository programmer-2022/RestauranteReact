import {useState} from 'react'
import "normalize.css"
import "./tarjeta.css"

const Tarjeta = (props) => {

	const [cantidad, setCantidad] = useState(1)
	const [id, setId] = useState(props.id)

	const sumar = () => setCantidad(cantidad + 1)
	const restar = () => setCantidad(cantidad - 1)

	const agregar = (e) => {
		setId(parseInt(e.target.id))
		props.agregar(cantidad, id)
	}

	return (
		<div className="contenedorTarjetaProductos">
			<div className="imagen">
				<img src={props.img} alt="imagen"/>
			</div>				
			<div className="contenedorInfo" >
				<h3>{props.titulo}</h3>
				<p>{props.descripcion}</p>
				<h4>${props.precio}</h4>
			</div>
			<div className="contenedorCantidad">
				<p>Cantidad</p>
				<div className="contador mb-2">
					<button className="btn btn-secondary border w-25 px-0" onClick = {restar}>-</button>				
					<input className="fs-5 w-25 text-center px-0" type="text" value={cantidad} readOnly></input>						
					<button className="btn btn-secondary border w-25 px-0" onClick = {sumar}>+</button>
				</div>
				<button className="btn btn-danger btn-sm" onClick = {agregar} id={props.id}>Agregar al carrito</button>
			</div>
		</div>
	)
}

export default Tarjeta