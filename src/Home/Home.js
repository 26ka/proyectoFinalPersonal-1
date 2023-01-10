import { Footer } from '../shared/Footer/Footer'
import './Home.css'
export function Home(){

    return(
        <>
            <section>
                <div className="banner">

                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2>Jesse & Joy</h2>
                            <p> Son dos hermanos nacidos en México. Jesse el 21 de Enero de 1982 y Joy el 20 de Junio de 1986. Desde pequeños, ambos empiezan a demostrar su gusto por la música, pero es en 2001 cuando deciden luchar por su sueño y comienzan a escribir canciones junto a su padre.</p>
                            <img src='https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/JESSI.jpg?alt=media&token=13ddcb1a-ae50-4416-9751-b465a0af6975'/>
                        </div>
                        <div className="col-12 col-md-4">
                        <i className="bi bi-vinyl-fill fs-1"></i>
                        <i className="bi bi-vinyl-fill fs-1"></i> 
                        <i className="bi bi-vinyl-fill fs-1"></i> 
                        <i className="bi bi-vinyl-fill fs-1"></i> 
                        </div>
                    </div> 
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center p-5">
                            <h1>NOTICIAS</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/Reik-Maluma.jpg?alt=media&token=b6b717bf-68e3-4d69-bffe-bbf1e5262a64" alt="" className="img-fluid w-100"/>
                            <hr/>
                            <p className="m-4">
                            Reik y Maluma, cantautor de origen colombiano, lanzaron recientemente su nuevo sencillo titulado Perfecta. En la colaboración se mezclaron ritmos urbanos y latinos, como es el caso del reggaetón, con la balada pop, género musical con el que el trío originario de Mexicali incursionó en la industria musical y con el que destacó por más de una década a través de melodías como Noviembre sin Ti o Yo quisiera, estrenadas en el 2007.
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/posibilidad-reik-invitados-sorpresas-celeste.jpeg?alt=media&token=dd81d616-c1c0-41be-8e42-a9d4cfc76c51" alt="" className="img-fluid w-100"/>
                            <hr/>
                            <p className="m-4">
                            Esta mañana, la empresa Escenario Live Entretairment anunció en sus redes sociales, que la presentación de Reik en Pachuca de Soto —programada para el 8 de septiembre del presente año —, fue cancelada; el motivo no fue expuesto y se informó que el reembolso de los boletos sería a través del mismo medio en que fue adquirido, por lo que no debería existir algún problema para que los espectadores recuperen su dinero.
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/reik-en-pachuca.jpeg?alt=media&token=4ce97f51-536d-4595-91ba-a229e22248b0" alt="" className="img-fluid w-100"/>
                            <hr/>
                            <p className="m-4">
                            PACHUCA.- Previo a la realización de la Feria San Francisco Pachuca 2022 que destaca por traer a grandes artistas, Reik abrirá el apetito musical de los espectadores capitalinos.

                            Pues fue anunciado que realizará una presentación como parte de En Cambio Tour y la cita será el 8 de septiembre en el auditorio de la plaza Explanada Pachuca.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}
