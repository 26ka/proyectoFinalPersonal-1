import { serviciosCancionesTop } from "../services/serviciosCanciones"


export function Music(){
    serviciosCancionesTop()
    return(
        <>
            <h1>MUSIC CARGANDO...</h1>
        </>
        
    )
}