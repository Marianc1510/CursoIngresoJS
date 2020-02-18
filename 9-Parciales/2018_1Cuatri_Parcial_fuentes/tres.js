function mostrar()
{ 
    var precio;
    var descuento;
    var precioFinal;

    precio=prompt(precio);
    descuento= precio * 30 / 100;
    precioFinal = precio - descuento;
    document.getElementById("elPrecioFinal").value= precioFinal;


}
