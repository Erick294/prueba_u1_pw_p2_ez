function muestraIncorrecto(){
    var imagen = document.getElementById('pokemon').src;
    var titulo = document.getElementById('idTitulo').style;
    var mensaje = document.getElementById('idMensaje')
    document.getElementById('pokemon').src="../img/pcolor.png";
    titulo.color="red";
    mensaje.display="block";
    mensaje.innerHTML="Pokémon incorrecto, la opción correcta es: excadrill"
}

function muestraCorrecto(){
    var imagen = document.getElementById('pokemon').src;
    var titulo = document.getElementById('idTitulo').style;
    var mensaje = document.getElementById('idMensaje');
    document.getElementById('pokemon').src="../img/pcolor.png";
    titulo.color="yellow";
    mensaje.innerHTML = "Felicitaciones, has seleccionado la opcion correcta"
    mensaje.display="block";
}

function reiniciar(){
    var imagen = document.getElementById('pokemon').src;
    var titulo = document.getElementById('idTitulo').style;
    var mensaje = document.getElementById('idMensaje');
    imagen.src="../img/pnegro.png";
    console.log(imagen);
    titulo.color="black";
    mensaje.display="none";
 }