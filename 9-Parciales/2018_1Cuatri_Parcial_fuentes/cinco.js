function mostrar()
{
    var sistemaSolar;
    var sistemaSolar=prompt(sistemaSolar);
    switch (sistemaSolar){
         case "mercurio" :
            alert("Esta mas cerca del sol, aca hace mas calor");
         break;
         case "venus":
            alert("Aca hace mas frio");
         break;
         case "tierra":
            alert ("Aca vivimos");
         break;
         default:
            alert ("No es un planeta valido");
         break;
        }

    
}
