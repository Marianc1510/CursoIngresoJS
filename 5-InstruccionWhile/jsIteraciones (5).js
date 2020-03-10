function mostrar()
{
    var sexo
    var sexo = prompt("ingrese f ó m .");
    while (sexo.toLowerCase () !="f" && sexo.toLowerCase () !="m") {
        sexo=prompt(" Su sexo es invalido, igrese nuevamente");
    }
     alert ("es correcto");

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN