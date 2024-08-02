
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function intentoDeUsuario(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento("p", "El número secreto es mayor");
        }else{
            asignarTextoElemento("p", "El número secreto es menor");
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value='';
}

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento)
    titulo.innerHTML = texto;
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los núemtos posibles");
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensajes iniciales
    //Generar el número aleatorio 
    //Inicializar el número de intentos
    condicionesIniciales()
    //Deshabilitar el botón de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

