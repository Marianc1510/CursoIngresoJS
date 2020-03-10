function mostrar()
{  
    var notas;
    var notasFinales=0
    var sexo;
    var promedio;
    var cantidadVarones=0
    var contador=0
    var notaMinima;
    var sexoMinimo;


    while (contador<=5) {
        notas=prompt("Ingrese la nota del alumno");
        notas=parseInt(notas);
        while (isNaN(notas)|| notas<0 ||notas >10) {
            notas=prompt("El dato fue erroneo, ingrese nuevamente.");
            notas=parseInt(notas);
        }
        sexo=prompt("ingrese f o m");
        
        while (sexo.toLocaleLowerCase()!="f" && sexo.toLocaleLowerCase()!="m") {
            sexo=prompt(" El dato es incorrecto, ingrese nuevamente");
        }
         
            
      // calcular el minimo de la nota guardar sexo del mismo
        if (contador==0) {
            notaMinima= notas;
            sexoMinimo= sexo;
            
        }
        else if(notas<notaMinima){
            sexoMinimo=sexo;
        }

      
     // preguntar si el sexo es varon y su nota >=6
        if (sexo=="m" && notas>=6){
            cantidadVarones ++;
        }
        contador ++;
    }
// calcular promedio fuera del while
    notasFinales +=notas;
    promedio= notasFinales / contador;
    alert(" El promedio de las notas es " + promedio);
}
