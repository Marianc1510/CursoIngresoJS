function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;
	
	
	while (contador<5) {
		 numero= prompt("Ingrese un numero. Ya van ingresado" + contador);
		while (isNaN(numero) || numero== "" || numero == null)  {
		 numero=prompt("No es un numero, ingrese nuevamente un numero");
		}
	 numero=parseInt(numero);
	 acumulador +=numero;
	 contador ++;
	 }
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN