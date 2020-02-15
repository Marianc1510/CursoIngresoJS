/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
// declarar variables
    var primerNumero;
    var segundoNumero;
    var operador;
    var operadorFinal;

// definir  2 numero aleatorio del 1 al 10
    primerNumero= Math.floor(Math.random()*(11-1)) + 1;
    segundoNumero=Math.floor(Math.random()*(11-1)) + 1;
// de los 2 numeros random realizar una operacion random
    operador=Math.floor(Math.random()*(5-1)) + 1;
     switch (operador) {
         case 1:
            operadorFinal= "+";
         break;
         case 2:
            operadorFinal= "-";
         break;
         case 3:
            operadorFinal= "*";
         break;
         case 4:
            operadorFinal= "/";
         break;
        }
     document.getElementById("PrimerNumero").value=primerNumero;
     document.getElementById("SegundoNumero").value=segundoNumero;
     document.getElementById("Operador").value=operadorFinal;
}//FIN DE LA FUNCIÓN
function Responder()
{
    var numeroUno;
    var numeroDos;
    var operador;
    var respuesta;
    var respuestaFinal;

    numeroUno=document.getElementById("PrimerNumero").value;
    numeroDos=document.getElementById("SegundoNumero").value;
    operador=document.getElementById("Operador").value;
    switch (operador) {
         case "+":
            respuestaFinal = numeroUno + numeroDos;
         break;
         case "-":
            respuestaFinal = numeroUno - numeroDos;
         break;
         case "*":
            respuestaFinal = numeroUno * numeroDos;
         break;
         case "/":
            respuestaFinal = numeroUno / numeroDos;
         break;
        
    }
     respuesta = document.getElementById("Respuesta").value;
     if( respuestaFinal == respuesta){
         alert( " esta correcto ");
        }
        else {
            alert( " es incorrecto ");
        }

}//FIN DE LA FUNCIÓN
