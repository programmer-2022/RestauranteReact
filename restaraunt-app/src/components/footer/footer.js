import React from 'react'
import '../footer/footer.css'

export default function Footer() {
  return (
    <div className="container-fluid footer-container">
        <footer className="py-5">
            <div className="row">
                <div className="col-2 mx-5 footer-container">
                    <img src="/assets/logo@2x.png" alt="" className="w-75" />
                </div>

                <div className="col-2">
                    <h5>MAPA DEL SITIO</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Restaurante Sal & Salsa Ltda</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Call 19 No. 7-30 Bogotá</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">reservas@salysalsa.com</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">312 325 25 32</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">&copy;Copyright</a></li>
                    </ul>
                </div>

                <div className="col-2">
                    <h5>CONTÁCTANOS</h5>
                </div>

                <div className="col-2">
                    <h5>RESERVAS</h5>
                </div>

                <div className="col-2">
                    <img src="/assets/mapa.png" alt="" className="w-150" />
                </div>
              
            </div>            
        </footer>
    </div>
  );
}
