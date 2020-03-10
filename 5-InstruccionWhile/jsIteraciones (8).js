function mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var continuar;
	continuar=true;

	while (continuar) {
		numero=prompt(" Ingrese numeros. Ya va ingresando " + contador);
			while (isNaN(numero) || numero=="" || numero== null)
			 {
			 numero=prompt( " No es un numero, ingrese nuevamente ");
			}
		continuar=confirm("Desea continuar");
		numero=parseInt(numero);
		if (numero >=0){
			positivo += numero;
			}
		 else {
			 negativo *=numero;
		 }	
		
		contador ++
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN