import { Footer } from "../shared/Footer/Footer"
import { useNavigate } from "react-router-dom"

export function Mercancia(){

    //Activamos la navegacion entre componentes cuadno se de un evento

    let navegacion=useNavigate()

    //que hago cuando se de el evento...
    function detectarEventos(productoSelecionado){
        navegacion('/tienda',{
            state:{productoSelecionado}
        })
        
    }

    let titulo="PRODUCTOS DE LA BANDA"

    let productos=[
        {
            nombre:"Sudadera de corazon",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/Captura.PNG?alt=media&token=b2b93637-5629-4e50-a74f-1c9d9fd4e7f6",
            precio:50000
        },
        {
            nombre:"Bluso",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/Captura%201.PNG?alt=media&token=45857d8c-6f0f-4903-be43-0282697af04b",
            precio:70000
        },
        {
            nombre:"Cuaderno",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/cuaderno.jpg?alt=media&token=f3fc1583-b0ec-47d8-87fb-28ec78567a2c",
            precio:15000
        },
        {
            nombre:"Gorra",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/Captura%203.PNG?alt=media&token=05c86b22-7e56-4572-bf69-eda8f08986bf",
            precio:25000
        },
        {
            nombre:"Sombrero",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/sombreros.jpg.crdownload?alt=media&token=75125cf3-5fc8-4117-97a2-289c08f1325b",
            precio:30000
        },
        {
            nombre:"Gitarra",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/gitarra.jpg?alt=media&token=2e71f390-439d-400c-b28e-0b9afddc5c0d",
            precio:1200000
        }
    ]

    return(
        <>
            <h1 className="text-center p-5">{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                   {
                    productos.map(function(producto,id){
                        return(
                            <div key={id}>
                                 <div className="col pb-5 h-100 p-2">
                                 <div className="card shadow text-center h-100 p-2 ">
                                    <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100" />
                                    <h1>{producto.nombre}</h1>
                                    <h3>COP: {producto.precio}<i className="bi bi-currency-dollar me-4"></i>        
                                    <i className="bi bi-gift"></i></h3>
                                    <button className="btn btn-primary mx-3 my-3" onClick={
                                        function(){
                                            detectarEventos(producto)
                                        }
                                    }>Ampliar</button>
                                 </div>
                                 </div> 
                            </div>
                        )
                    })
                   }

                </div>
            </div>
            <Footer/>
        </>
    )
}