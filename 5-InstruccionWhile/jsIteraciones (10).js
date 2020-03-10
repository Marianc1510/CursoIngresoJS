function mostrar()
{
 //DECLARAR VARIABLES
	var contador=0;
	var numeros;
	var negativos=0;
	var positivos=0;
	var cantidadNegativos=0;
	var cantidadPositivos=0;
	var pares=0
	var cantidadCeros=0;
	var promediosNegativos;
	var promediosPositivos;
	var diferencia;
	var respuesta=true;

	while(respuesta)
	{	
		//Pedidos de datos
		numeros=prompt("Ingrese numeros");
		numeros=parseInt(numeros);
		//Validacion
		while (isNaN(numeros)||numeros==""||numeros==null){
			numeros=prompt("No es un numero, ingrese nuevamente");
			numeros=parseInt(numeros);
		}
		//Evaluar condiciones

		//Evaluamos primero si son positivos
		if(numeros>0){
			//aca evaluamos el caso positivo
			positivos +=numeros;
			cantidadPositivos ++;
			//aca evaluamos los pares tmb
		 var resto;
		 resto= numeros % 2;
		 if (resto ==0){
			 pares ++;
		 }
		}else if(numeros<0){
			//aca evaluamos los negativos	
			negativos +=numeros;
			cantidadNegativos ++;

		}else{
			cantidadCeros++;
		}

		//Finaliza el while
		respuesta=confirm("desea continuar");
	}
	//Una vez que se termina el ingreso de datos se calculan los promedios
	if(cantidadPositivos>0){
		promediosPositivos = positivos / cantidadPositivos;	
	}

	if(cantidadNegativos>0){
		promediosNegativos = negativos / cantidadNegativos;
	}
		
	diferencia = positivos-negativos;
	document.write("Cantidad total acumulada de positivos: " +  positivos + "<br>");
	document.write("Cantidad total acumulada de negativos: " +  negativos + "<br>");
	document.write("Cantidad total de negativos: " +  cantidadNegativos + "<br>");
	document.write("Cantidad total de positivos: " +  cantidadPositivos + "<br>");





}//FIN DE LA FUNCIÓN