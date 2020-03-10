function mostrar()
{
// declarar variables
	var contador=0;
	var maximo;
	var minimo;
	var numeroPedido;
	var respuesta=true;

	while(respuesta!=false){
	 	numeroPedido=prompt ("Ingrese un numero" );
		while (isNaN(numeroPedido) || numeroPedido =="" || numeroPedido== null)
		{
			numeroPedido=prompt("No es un numero, ingrese nuevamente");
		}
		respuesta=confirm(" desea continuar");
		numeroPedido=parseInt(numeroPedido);
		if(contador==0){
			//primera vez que pedimos numero
			maximo=numeroPedido;
			minimo=numeroPedido;
		}
		else if (numeroPedido >=maximo){
			maximo=numeroPedido
		}
		else if(numeroPedido <=minimo){
				minimo=numeroPedido;
		}
		contador++;
	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;




}//FIN DE LA FUNCIÓN