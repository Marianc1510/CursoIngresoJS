function mostrar()
{ 
    var precio;
    var descuento;
    var preciofinal;

    precio=prompt(precio);
    descuento= precio * 30 / 100;
    document.getElementById("elPrecioFinal").value= precio - descuento;


}
