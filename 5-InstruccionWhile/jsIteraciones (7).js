function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var continuar;
	continuar=true;
	
	while(continuar){
		numero=prompt(" Ingrese numeros. Ya van ingresados " + contador);

			 while (isNaN(numero) || numero=="" || numero== null)
			 {
			 numero=prompt( " No es un numero, ingrese nuevamente ");
			}
		continuar=confirm("Desea continuar");
		
		numero= parseInt(numero);
		acumulador +=numero;
		contador ++;
	
	}
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN