//h1 titulo
//querySelector es para traer objetos de otro archivo
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    // se declara la variable, parseint es para cambiar de string a numero, getelementbyid es para llamar un input o caja de texto, y el value es para captar el digito ingresado
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario'). value);
    // === es para la comparacion estricta

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
//si ya sorteamos todos los numeros
if(listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
} else{
//si el numero generado esta incluido en la lista
if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();

} else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}
}
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarjuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
    //desahibilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
 