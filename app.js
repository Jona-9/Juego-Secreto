let numerogenerado=0;
let intentos = 0;
let numerosSorteados= [];
let Numero_Deintentos = 10;
let oportunidades = 0;
document.getElementById('terminar').removeAttribute('disabled');
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numerogenerado) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numerogenerado) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
   let numerosecreto = Math.floor(Math.random()*Numero_Deintentos)+1;
    console.log(numerosSorteados);
    if(Numero_Deintentos > numerosSorteados.length){
    while(numerosSorteados.includes(numerosecreto)){
      numerosecreto = Math.floor(Math.random()*Numero_Deintentos)+1;
      }
      numerosSorteados.push(numerosecreto);
      return numerosecreto;
   }else{
      asignarTextoElemento('p','Completaste todos los números');
   }
   }
   


function condicionesIniciales() {
   document.getElementById('terminar').removeAttribute('disabled');
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${Numero_Deintentos}`);
     numerogenerado=generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
   document.getElementById('terminar').removeAttribute('disabled');
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    oportunidades++;
    if(oportunidades==3){
    cantidadIntentos();
    }
}
function cantidadIntentos(){
   if(oportunidades==3){
      asignarTextoElemento('p','Jugaste 3 veces, el juego terminó');
   }
   document.querySelector('#terminar').setAttribute('disabled','true');
   document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
