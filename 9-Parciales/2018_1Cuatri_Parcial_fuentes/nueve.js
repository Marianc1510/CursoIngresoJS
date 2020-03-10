function mostrar()
{   // DECLARAR VARIABLES
    var marcaProducto;
    var productoPesado;
    var peso;
    var temperatura;
    var cantidadTempP=0
    var cantidadPro=0
    var totalProducto=0
    var promedio;
    var pesoMaximo;
    var pesoMinimo;
    var primeraVuelta=true;
    var respuesta=true;

    //CONDICIONES HASTA QUE EL USUARIO QUIERA
    while (respuesta) {
        marcaProducto=prompt("Ingrese Marca del Producto");
        peso=prompt("Ingrese peso del producto");
        peso=parseInt(peso);
        temperatura=prompt("Ingrese su temperatura");
        while(isNaN(peso)|| peso<1||peso>100 ||peso=="" || peso==null){
            peso=prompt("Este dato es incorrecto, ingrese nuevamente");
        }
        while(marcaProducto=="" || marcaProducto==null){
            marcaProducto=prompt("Este dato es incorrecto, ingrese nuevamente");
        }
        while (isNaN(temperatura)|| temperatura<-30||temperatura>30 || temperatura=="" || temperatura==null){
            temperatura=prompt("Este dato es incorrecto, ingrese nuevamente");
        }

        if(primeraVuelta==true){
            pesoMaximo=peso;
            pesoMinimo=peso;
            marcaProducto=totalProducto;
            primeraVuelta=false;
        }
        else if (peso>pesoMaximo){
            pesoMaximo=peso;
            productoPesado=marcaProducto;
        }
        else if (peso<pesoMinimo){
            pesoMinimo=peso;
        }
        
        var resto;
        resto= temperatura % 2;
        if (resto==0 ){
            cantidadTempP ++;
        }
        else if (temperatura <0) {
            cantidadPro ++;
        }
        else {
            totalProducto +=marcaProducto;
        }
        respuesta=confirm("desea continuar"); 
    }
    //PROMEDIOS Y SALIDA.
    promedio=
    document.write(" La cantidad de temperaturas pares son " + cantidadTempP + "</br>");
    document.write(" La marca del producto mas pesado es " + productoPesado + "</br>");
    document.write(" La cantidad de producto que se conserva en 0 grados es " + cantidadPro + "</br>");
    document.write(" El promedio del peso de todos los productos es " + promedio + "</br>");
    document.write(" El peso maximo es " + pesoMaximo + "</br>");
    document.write(" El peso minimo es " + pesoMinimo + "</br>");

}
