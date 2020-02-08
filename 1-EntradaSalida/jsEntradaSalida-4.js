/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaraste la variable
	var nombre;

	//obteniendo o guardando el valor ingresado en la variable
	nombre= prompt("Ingrese su nombre");
	
	//mostrar
	document.getElementById("elNombre").value= nombre;

}

