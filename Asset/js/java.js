function campos(){
    Cambiar_contraste_Body("Body");
}
function Cambiar_contraste_Body(campo,){
    let Cambiar_body = document.getElementById(campo);
    let Cambiar_Contenedor = document.getElementsByClassName("Contenedor");
    console.log(Cambiar_Contenedor);
    let Cambiar_titulo = document.getElementsByClassName("titulo");
    console.log(Cambiar_titulo);
    let Cambiar_texto_describcion = document.getElementsByClassName("texto_describcion");
    console.log(Cambiar_texto_describcion);
    let Cambiar_texto_Dequetrata = document.getElementsByClassName("Dequetrata");
    console.log(Cambiar_texto_Dequetrata);
    let Cambiar_texto_h1 = document.getElementsByClassName("inicio");
    console.log(Cambiar_texto_h1);
    if (campo == "Body"){
        if (Cambiar_body.style.backgroundColor =="rgb(34, 34, 34)"){
            Cambiar_body.style.backgroundColor ="rgb(239, 239, 239)";
            Cambiar_body.style.fontFamily="'Times New Roman', Times, serif";
            Cambiar_Contenedor.Contenedor.style.backgroundColor ="rgb(209, 209, 209)";
            Cambiar_titulo.titulo.style.color="white";
            Cambiar_titulo.titulo.style.backgroundColor="rgb(50, 50, 50)";
            Cambiar_texto_describcion.texto_describcion.style.color="black";
            Cambiar_texto_Dequetrata.Dequetrata.style.color="black";
            Cambiar_texto_h1.inicio.style.color="black";

        }
        else{
            Cambiar_body.style.backgroundColor ="rgb(34, 34, 34)";
            Cambiar_body.style.fontFamily="Arial, Helvetica, sans-serif";
            Cambiar_Contenedor.Contenedor.style.backgroundColor ="rgb(71, 71, 71)";
            Cambiar_titulo.titulo.style.color="black";
            Cambiar_titulo.titulo.style.backgroundColor="rgb(221, 221, 221)";
            Cambiar_texto_describcion.texto_describcion.style.color="rgb(201, 207, 212)";
            Cambiar_texto_Dequetrata.Dequetrata.style.color="white";
            Cambiar_texto_h1.inicio.style.color="white";
        }
    }
}
