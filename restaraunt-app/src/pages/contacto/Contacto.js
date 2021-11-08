import React from 'react'
import "./contacto.css"

const Contacto = () => {
	return (
		<>
			<div className="contenedor-titulo">
        		<div className="div-titulo"><h1>Contáctanos</h1></div>
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
		                            <input type="text" className="form-control" id="subject" placeholder="Asunto"/>
		                        </div>

		                        <div className="mb-4">
		                            <input type="text" className="form-control" id="name" placeholder="Nombre completo"/>
		                        </div>


		                        <div className="mb-4">
		                            <input type="email" className="form-control" id="email" placeholder="Correo electrónico" required/>
		                        </div>

		                        <div className="mb-4">
		                            <textarea className="form-control my-textarea" id="message" rows="4" placeholder="Su Mensaje"></textarea>
		                        </div>

		                        <div className="form-check mb-3">
		                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
		                            <label className="form-check-label fst-italic mb-2" for="flexCheckDefault">
		                            Acepto términos y condiciones
		                            </label>
		                        </div>
		                        <div className="mb-3 text-center">
		                            <button type="submit" className="btn mb-3">ENVIAR</button>
		                        </div>
		                    </form>
		                </div>
		            </div>   
		        </div>
		    </div>
          
		</>
	)
}

export default Contacto