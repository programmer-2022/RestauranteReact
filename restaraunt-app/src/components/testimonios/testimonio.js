import React from 'react'
import '../testimonios/testimonio.css'

export default function Testimonio() {
    return (
        <section id="comentarios">
            <div className="container">
                <div className="content-center">
                    <h1 className="padding-top padding-h1">Unas palabras de nuestros clientes</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <p>Enim atque consectetur nesciunt cumque, iure esse voluptatem odit maxime,<br /> vel mollitia, earum doloremque veritatis pariatur inventore saepe temporibus. <br />Fuga, exercitationem architecto!</p>
                            <div className="testimonial-user">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src="assets/personal2@2x.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-9">
                                        <h6>Sofia Mendez</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="carousel-item">
                                <p>Enim atque consectetur nesciunt cumque, iure esse voluptatem odit maxime,<br /> vel mollitia, earum doloremque veritatis pariatur inventore saepe temporibus. <br />Fuga, exercitationem architecto!</p>
                                <div className="testimonial-user">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img src="assets/personal1@2x.png" alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-md-9">
                                            <h6>Jairo Díaz</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="carousel-item">
                            <p>Enim atque consectetur nesciunt cumque, iure esse voluptatem odit maxime,<br /> vel mollitia, earum doloremque veritatis pariatur inventore saepe temporibus. <br />Fuga, exercitationem architecto!</p>
                            <div className="testimonial-user">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src="assets/testimonio1@2x.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-9">
                                        <h6>Sebastian Jimenez</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}