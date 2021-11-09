import React from 'react'
import Tarjeta from "../../components/tarjeta/Tarjeta"
import {useFetch} from "../../hooks/useFetch.js"
import "./menu.css"

const Menu = () => { 

	/*

	let {data, isPending, error} = useFetch("../../../public/data/reservas.json")

	console.log(data)
	console.log(isPending)
	console.log(error)

	*/

	/*

	xfcc
  */

	const [data,setData]= React.useState([]);

	const getData=()=>{
    fetch('data/productos.json')

      .then(res=> {
      	return res.json();
      })

      .then(res => {
      	setData(res)
      });

  }

  React.useEffect(()=>{

    getData()


  },[])

const [productos, setProductos] = React.useState({})

const agregar = (contador, id) => {

	const producto = {
		"IdProducto": id,
		"cantidad": contador
	}

	if(productos.hasOwnProperty(producto.IdProducto)){
		producto.cantidad = productos[producto.IdProducto].cantidad+contador
	}
	
	productos[producto.IdProducto] = {...producto}
	
	


/*
	if(productos.hasOwnProperty(producto.IdProducto)){
		producto.cantidad = productos[producto.IdProducto].cantidad+1
	}
*/

	//setProductos((productos) => [...productos, producto])



}


console.log(productos)




	return (
		<>
			<div className="tituloMenu">
				<h3>El Menú</h3>
			</div>
			<div className="contenedorMenu">
				<div className="contenedorTarjetasMenu">
					{data.map(el => (
						<Tarjeta key={el.id} id={el.id} agregar={agregar} titulo={el.title} descripcion={el.descripcion} img={el.url} precio={el.precio}/>	
							))}
					
				</div>
				
			</div>
		</>
	)
}

export default Menu