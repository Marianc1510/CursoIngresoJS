/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //DECLARO VARIABLES
     var cantidad;
     var marca;
     var precioUnidad;
     var precioTotal;
     var descuento;
     var precioDescuento;
     var ingresosBrutos;

     //oBTENGO DATOS
     cantidad= document.getElementById("Cantidad").value;
     cantidad=parseInt(cantidad);
     marca=document.getElementById("Marca").value;

     //CALCULO PRECIOS
     precioUnidad=35;
     precioTotal= cantidad * precioUnidad;
     
     //SELECCION DE DESCUENTO
     if(cantidad >=6){
         //calcular 50
         descuento = precioTotal * 50 /100;
     }
     else{
         if(cantidad == 5 && marca=="ArgentinaLuz")
         {  
             //descuento 40
            descuento = precioTotal *40 / 100;
         }
         else if (cantidad == 5) {
             // descuento del 30
            descuento = precioTotal * 30 /100;
         }
         else {

            if( cantidad == 4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas"){
             //descuento del 25
             descuento = precioTotal * 25 /100;
             }
             else if(cantidad ==4){
             //descuento del 20
             descuento = precioTotal *20 /100;
            }
            else{

                if( cantidad ==3 && marca=="ArgentinaLuz") {
                    //descuento del 15
                    descuento = precioTotal * 15/100;
                    }
                else if (cantidad == 3 && marca=="FelipeLamparas"){
                    //descuento del 10
                    descuento = precioTotal *10 / 100;
                    }
                else if (cantidad == 3){
                    //descuento del 5
                    descuento = precioTotal * 3 / 100;
                }
          
         }
            
        }

     }

     //CALCULAR VALOR FINAL UTILIZANDO EL DESCUENTO
     precioDescuento = precioTotal - descuento;

     //CHEQUEAR SI ENTRA EN INGRESOS BRUTOS
     
     if (precioDescuento >= 120){
        ingresosBrutos = precioDescuento * 10 /100;
        precioDescuento= precioDescuento + ingresosBrutos;
        alert( " usted pago de IIBB " + ingresosBrutos);
         }

     
     document.getElementById("precioDescuento").value= precioDescuento;

}

