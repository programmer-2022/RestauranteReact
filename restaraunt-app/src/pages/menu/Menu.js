import {useState, useEffect, lazy, Suspense} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import {MsgSucessful} from '../../helpers/alerts'
import Tarjeta from '../../components/tarjeta/Tarjeta'
import "normalize.css"
import "./menu.css"


export default function Menu() { 

	const [data, setData] = useState([]);
	//const [productos, setProductos] = useState({})

	const [productos, setProductos] = useState(() => {
		const saved = localStorage.getItem("carrito");
		const initialValue = JSON.parse(saved);
		return initialValue || {};
	});

	const [total, setTotal] = useState(0)
		
	const getData = async () => {
		try {
			const res = await fetch('data/productos.json')
			const _data = await res.json()
			if(res.ok) setData(_data)			
		} catch (error) {
			console.log(error);
		}
	}
	
	useEffect(() => {
		getData()
	},[])

	const agregar = (pCantidad, id) => {
		setTotal(pCantidad)
		const producto = {
			"IdProducto": id,
			"cantidad": pCantidad
		}
		if(productos.hasOwnProperty(producto.IdProducto)) {
			producto.cantidad = pCantidad
		}
		//setProductos(productos[producto.IdProducto] = {...producto})
		productos[producto.IdProducto] = {...producto}
		MsgSucessful("Producto añadido a la cesta")

		//setTotal((total) => total += pCantidad)
		//console.log("Total productos: ", total);
		localStorage.setItem('carrito', JSON.stringify(productos));
	}
	
	console.log(productos)
	return (
		<Suspense fallback={<h2>Cargando...</h2>}>
 			<div className="contenedor-titulo-menu">
        		<div className="div-titulo-menu"><h1>El Menú</h1></div>
				<div className="boton-descargar-menu mb-5">
        			<Link to="/docs/menu2x.pdf" download="Menú_Sal&Salsa.pdf" target="_blank"><FontAwesomeIcon icon={faDownload} /> Descargar Menú</Link>
    			</div>
    		</div> 
			<div className="contenedorMenu mb-5">
				<div className="container">
					{
						(data.length === 0)
						? <h2>Cargando productos...</h2>
						: data.map(el => (<Tarjeta key={el.id} id={el.id} agregar={agregar} titulo={el.title} descripcion={el.descripcion} img={el.url} precio={el.precio}/> ))
					}					
				</div>				
			</div>
		</Suspense>		
	)
}