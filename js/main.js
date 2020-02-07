            
let algoritmo;
let accion;
let labelClave;
let clave;
let editor;
let resultado;
let placheolder;

/**
 * @description pausa la ejecución de una función para evitar que se ejecute demasiadas veces.
 * @param {Function} fuc Es la función que se ejecutara al terminar el timer.
 * @param {number} delay Es el tiempo de espera despues de cada ejecución de esta función.
 * @returns {Function} Regresa una función debounce.
 * @author stackoverflow
 */
function debounce(fuc,delay){
    let debounceTimer;
    return function(){
        placheolder.innerHTML = '<img src="src/reloj.gif" alt="Procesando...">';
        const context=this;
        const args=arguments;
        clearTimeout(debounceTimer);
        debounceTimer=setTimeout(()=>fuc.apply(context,args),delay);

    }
}


/**
 * @description Función que configura el arranque de la aplicación.
 * @author Brenda Barrios Becerra
 */
function main(){
    algoritmo=document.querySelector('#algoritmo');
    accion=document.querySelector("#accion");
    labelClave=document.querySelector("#label-clave");
    clave=document.querySelector("#input-clave");
    editor=document.querySelector("#editor");
    resultado=document.querySelector("#resultado");
    placheolder=document.createElement('p');
    placheolder.id='placeholder';
    resultado.append(placheolder)
    let listener=debounce(function(e){
        checkInputs();
    },1000);
    algoritmo.addEventListener('change',listener,false);
    accion.addEventListener('change',listener,false);
    clave.addEventListener('input',listener,false);
    editor.addEventListener('keyup',listener,false);
}


/**
 * @description Lee los datos de todos los campos
 * @author Brenda Yasmin Barrios Becerra
 */
function checkInputs(){
    let valorTexto=editor.value
    let tipoAlgoritmo=algoritmo.selectedIndex
    let cifrarDesifrar=accion.selectedIndex
    let ingresaClave=clave.value
    placheolder.innerHTML= `Texto: ${valorTexto}<br>
    Algoritmo: ${tipoAlgoritmo}<br>
    Acción:${cifrarDesifrar}<br>
    Clave: ${ingresaClave}<br>`;


    if ([2,3,4,6].includes(tipoAlgoritmo)) {
        labelClave.style.visibility = 'visible';
        clave.style.visibility = 'visible';
        
    } else {
        labelClave.style.visibility = 'hidden';
        clave.style.visibility = 'hidden';
        
    }


    switch (tipoAlgoritmo) {
        case 0:
            placheolder.innerText = cesar(valorTexto, accion.value);
            break;

        case 1:
            if(accion.value=='cifrar')
                placheolder.innerText=polybiosCifrar(valorTexto);
            else 
                placheolder.innerText=polybiosDescifrar(valorTexto);
            break;

        case 2:
            placheolder.innerText = cifrarAlberti(valorTexto, ingresaClave, cifrarDesifrar);
            break;
        case 3:
            placheolder.innerText = cifrarVigenere(valorTexto, ingresaClave, cifrarDesifrar);
            break;  
        case 4:
            
            break;
        case 5:
            
            break;

        
        default:
            break;
    }
}