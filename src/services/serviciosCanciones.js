//receta para consumir un api en react
 export async function serviciosCancionesTop(){
    //1.paradonde vas y que vas
    //escribir la url de servicios de api
   const URL="https://api.spotify.com/v1/artists/1mX1TWKpNxDSAH16LgDfiR/top-tracks?market=US"
   //2. que operacion vas hacer en la base de datos 
   // configurar la peticion de envio hacia el servidor 
   const PETICION={
    method:"GET",
    headers:{Authorization:"Bearer BQAVgv940VP9jqj4sKtM_s5f9XYY5P8RJYV4Y-CeZkd9lfabHQ2xse1IYgzpXzEu7ZrXNEZbTMRoOEXi_EhU2reToakZxNRnH7OPN18xx_Onc_KFQ-j0JYh71Z_yAxppLAW1nD546gZtBlEQW3WObal_dP2jGtww9C_8y-rf_JH6_W5Hxcr8aVxQTC9IifU"}

   }
   //3.nos vamos para restaurante
   //consumimos el api
   let respuesta=await fetch(URL,PETICION)
   let canciones=await respuesta.json()
   console.log(canciones)

}