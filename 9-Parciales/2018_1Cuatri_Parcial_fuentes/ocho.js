function mostrar()
{   // DECLARO VARIABLES
    var letra;
    var numeros;
    var cantidadPares=0
    var cantidadImpares=0
    var cantidadCeros=0
    var promedioPositivos;
    var negativos;
    var maximo;
    var minimo;
    var resto;
    var positivos;
    var cantidadPositivos=0
    var impares;
    var letraMinimo;
    var letraMaximo;
    var respuesta=true;
    var primeraVez=true;
//CONDICION INGRESO DE DATOS HASTA QUE EL USUARIO QUIERA
    while (respuesta) {
        numeros=prompt("Ingrese numeros");
        numeros=parseInt(numeros);
        letra=prompt("Ingrese letras");
        while(isNaN(numeros) || numeros <-100 || numeros>100 || numeros=="" || numeros==null){
            numeros=prompt("Los datos no son correctos, ingrese nuevamente.");
        }
        while(letra==""|| letra==null){
            letras=prompt("No es valido, ingrese una letra.");
        } 
        if (primeraVez==true){
            maximo=numeros;
            minimo=numeros;
            letraMaximo=letra;
            letraMaximo=letra;
            primeraVez=false;
        }
        else if(numeros>maximo){
            letraMaximo=letra;
            maximo=numeros;
        }
        else if(numeros<minimo){
            letraMinimo=letra;
            minimo=numeros;
        }
        if (numeros>0){
            positivos=numeros;
            cantidadPositivos ++;
        }
        else {
            negativos=numeros;
            negativos ++;
        }
        resto= numeros %2;
        if(numeros==0){
            cantidadCeros ++;
        }
        else if (resto==0){
            cantidadPares ++;
        }
        else{
            cantidadImpares ++;
        }
        
        
        
      respuesta=confirm("Desea continuar");
    }
    //CALCULAR PROMEDIOS y sumas totales
   
        promedioPositivos= positivos / cantidadPositivos;
    
  document.write("Cantidad de numeros pares" + cantidadPares + "</br>");
  document.write("Cantidad de numeros impares" + cantidadImpares + "</br>");
  document.write("Cantidad de numeros ceros" + cantidadCeros + "</br>");
  document.write("El promedio de todos los numeros positivos" + promedioPositivos + "</br>");
  document.write("La suma de todos los numeros negativos" + negativos + "</br>");
  document.write("Maximo y letra del maximo" + maximo + letraMaximo + "</br>");
  document.write("Minimo y letra del minimo" + minimo + letraMinimo + "</br>");

}

