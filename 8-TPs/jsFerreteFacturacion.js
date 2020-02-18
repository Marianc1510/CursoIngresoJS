/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    precioUno=document.getElementById("PrecioUno").value;
    precioUno=parseInt(precioUno);
    precioDos=document.getElementById("PrecioDos").value;
    precioDos=parseInt(precioDos);
    precioTres=document.getElementById("PrecioTres").value;
    precioTres=parseInt(precioTres);
    resultado=precioUno + precioDos + precioTres;
    alert(" su suma es " + resultado);
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    precioUno=document.getElementById("PrecioUno").value;
    precioUno=parseInt(precioUno);
    precioDos=document.getElementById("PrecioDos").value;
    precioDos=parseInt(precioDos);
    precioTres=document.getElementById("PrecioTres").value;
    precioTres=parseInt(precioTres);
    resultado=(precioUno + precioDos + precioTres) / 3;
    alert(" su promedio es " + resultado);
	
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var iva;
    var precioFinal;
    precioUno=document.getElementById("PrecioUno").value;
    precioUno=parseInt(precioUno);
    precioDos=document.getElementById("PrecioDos").value;
    precioDos=parseInt(precioDos);
    precioTres=document.getElementById("PrecioTres").value;
    precioTres=parseInt(precioTres);
    resultado=precioUno + precioDos + precioTres;
    iva = resultado * 21/100;
    precioFinal= precioUno + precioDos+ precioTres + iva;
    alert(" su Precio final es " + precioFinal + " Mas IVA 21% " + iva);  
    
}