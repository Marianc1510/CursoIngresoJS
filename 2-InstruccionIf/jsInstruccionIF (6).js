function mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;
    edad=parseInt(edad);
     if(edad >=18)
    {
        alert(" Es mayor de edad ");
    }
    if (edad >=13 && edad <=17) 
    {
        alert( " Es adolescente ");
    }
    if(edad<13)   
    {
        alert(" Es menor de edad ");
    }
    // este ejercicio esta mal como lo realice porque hay que hacer una solo conclusion.
 //else if (edad >=18)
 //else alert es menor de edad
}//FIN DE LA FUNCIÓN