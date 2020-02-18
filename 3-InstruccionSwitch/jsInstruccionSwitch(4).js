function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño) {
         case "Febrero":
            alert( " tiene 29 dias ");
         break;
         case "Abril":
            alert( " tiene 30 dias ");
         break;
         case "Junio":
            alert( " tiene 30 dias ");
         break;
         case "Septiembre":
            alert( " tiene 30 dias ");
         break;
         case "Noviembre":
            alert( " tiene 30 dias ");
         break;
            
    
        default:
            alert (" tiene 31 dias");
            break;
    }
	



}//FIN DE LA FUNCIÓN