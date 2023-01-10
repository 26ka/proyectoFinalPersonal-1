import { Footer } from "../shared/Footer/Footer"
import './Integrantes.css'

export function Integrantes(){
    

    let integrantes=[
        {
            nombre:"jesse Huerta Uecke",
            post:"https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/Joy.jpg?alt=media&token=0f379c3b-1b90-4cae-bbc7-93ed6124dac4",
            sipnosis:"Jesse el 21 de Enero de 1982 Desde pequeña, empieza a demostrar su gusto por la música, pero es en 2001 cuando deciden .."
        },
        {
            nombre:"joy Huerta Uecke",
            post:"https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/jessy.jpg?alt=media&token=fe3d6465-3d99-44a8-9a4e-ede00e684fc6",
            sipnosis:"joy Huerta Uecke(1986) en la Ciudad de México empieza a demostrar su gusto por la música, pero es en 2001 cuando deciden .."
        },
        
    ]
    let titulo="INTEGRANTES"

 return(
    <>
    <section>
        <div className="colorfondo">   
            <div className="bannerintegrantes">
            </div>
        </div>
    </section>
        <div className="container">
                <h1 className="text-center p-5"> <i className="bi bi-star-fill"> </i> { titulo} <i className="bi bi-star-fill"></i></h1> <hr/>
                <div className="row row-cols-1 row-cols-md-1 m-5">
                   {
                    integrantes.map(function(integrante){
                        return(
                            <>   
                            <div className="card mb-3 m-5">
                                <div className="row fotofonfo">
                                    <div className="col-md-4 ">
                                        <img src={integrante.post} className="rounded-start h-100 img-fluid w-100" alt="foto"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="text-center">{integrante.nombre}</h5>
                                            <p className="text-start m-4 ">{integrante.sipnosis}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                   }

                </div>
            </div>
            <Footer/>
    </>
    
 )
}