function mostrar()
{
//tomo la edad  
var mesDelAño;
var mesDelAño = document.getElementById("mes").value;
 
    switch (mesDelAño) {
         case "Marzo":
            alert(" Falta para el invierno ");
         break;
         case "Julio":
            alert (" Ya estamos en invierno Abrigate ");
         break;
         case "Agosto":
            alert(" Ya estamos en invierno Abrigate");
         break;
         case "Noviembre":
            alert( " Ya pasamos el frio, ahora calor ");
         break;
         
         default:
         break;
    }

}//FIN DE LA FUNCIÓN