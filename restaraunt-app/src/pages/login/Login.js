import React from 'react'
import "normalize.css"

const Login = () => {
	return (
		<>
			<div className="container col-md-4 mt-5">
				<h2>Iniciar sesión</h2>
			</div>
			<div className="container col-md-4 mt-5 mb-5">
				<form>
				  <div class="mb-3">
				    <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
				    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				    <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie más.</div>
				  </div>
				  <div class="mb-3">
				    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
				    <input type="password" className="form-control" id="exampleInputPassword1"/>
				  </div>
				  <button type="submit" className="btn btn-primary">Ingresar</button>
				  <button type="submit" className="btn btn-primary ms-2">Crear cuenta</button>
				</form>
			</div>
		</>
	)
}

export default Login