function mostrar()
{
	var numero;
	var numero = prompt("Ingrese un numero del 0 al 9 inclusive");
	numero=parseInt(numero);
	while (numero>=10 || numero<=-1) {
		numero = prompt("Este numero es Invalido. Ingrese nuevamente");
		nuemero=parseInt(numero);
		}
	 alert(" Este numero es correcto");
	document.getElementById("Numero").value= numero;
}//FIN DE LA FUNCIÓN