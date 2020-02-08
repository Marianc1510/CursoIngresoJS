/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	var elNombre;
    var laEdad;

    elNombre = document.getElementById("elNombre").value;
    laEdad = document.getElementById("laEdad").value;

    alert( " Usted se llama "  +  elNombre + " y tiene " + laEdad);
	
}

