function mostrar()
{
//tomo la edad  
    var edad;

    edad=document.getElementById("edad").value;
    edad=parseInt(edad);
// Informar si es adolescente entre 13 a 17 inclusive.

    if( edad >=13 && edad <=17)
{   
    alert( " Usted es adolescente ");

}

}//FIN DE LA FUNCIÓN