import React from 'react'
import "normalize.css"
import "./reservas.css"
//import {useFetch} from "../../hooks/useFetch"

const Reservas = () => {

	

	const url = "data/reservas.json"

	const [data, setData] = React.useState([]);
	
	const getData = async () => {
		try {
			const res = await fetch(url)
			const _data = await res.json()
			if(res.ok) setData(_data)			
		} catch (error) {
			console.log(error);
		}
	}
	
	React.useEffect(() => {
		getData()
	},[])


	return (
		<>
			<div className="contenedor-titulo">
        		<div className="div-titulo"><h1>Reservas</h1></div>
    		</div> 

		    <div className="container-fluid">
		        <div className="container">              
		            <div className="row contenedor-parrafos">
		                <div className="col div-izq">
		                    <p className="paragraph mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat, cupiditate deleniti eveniet voluptate non praesentium numquam laudantium eaque quidem. Harum unde, sed iste assumenda minima eligendi eveniet quam corrupti.</p>
		                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat, cupiditate deleniti eveniet voluptate non praesentium numquam laudantium eaque quidem. Harum unde, sed iste assumenda minima eligendi eveniet quam corrupti.</p>
		                </div>
		                <div className="col">
		                    <form>
		                        	                        
		                        <div className="mb-4">
		                            <input type="text" className="form-control" placeholder="Nombre completo" required/>
		                        </div>

		                        <div className="mb-4">
		                            <input type="text" className="form-control" placeholder="Número de contacto"/>
		                        </div>


		                        <div className="mb-4">
		                            <input type="email" className="form-control" placeholder="Correo Electrónico" required/>
		                        </div>

		                        <div className="mb-4">
		                            <label htmlFor="cantidad">Cantidad de personas</label>
		                            <input type="number" className="form-control" placeholder="Cantidad de personas" id="cantidad" required/>
		                        </div>

		                        <div className="mb-4">
		                            <label htmlFor="fecha">Fecha de la reserva</label>
		                            <input type="date" className="form-control" placeholder="Cantidad de personas" id="fecha" required/>
		                        </div>

		                        <div className="mb-4 my-select">
		                            <select className="form-select" aria-label="Default select example">
		                                {
		                                (data.length !== 0) ? data.map((obj) => {return <option key={obj.id} value={obj.id}>{obj.name}</option>}) : <option value="0">Items not found</option>
						              }
		                            </select>
		                            <span className="custom-arrow"></span>
		                        </div>

		                        <div className="mb-4">
		                            <textarea className="form-control my-textarea" rows="4" placeholder="Su Mensaje"></textarea>
		                        </div>

		                        <div className="form-check mb-3">
		                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
		                            <label className="form-check-label fst-italic mb-2" htmlFor="flexCheckDefault">
		                            Acepto términos y condiciones
		                            </label>
		                        </div>
		                        <div className="mb-3 text-center">
		                            <button type="submit" className="btn boton mb-3">ENVIAR</button>
		                        </div>
		                    </form>
		                </div>
		            </div>   
		        </div>
		    </div>
          
		</>
	)
}

export default Reservas