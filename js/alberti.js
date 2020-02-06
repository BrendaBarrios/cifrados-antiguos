
/**
 * @description Algoritmo de cifrado Alberti.
 * @param {String} texto Texto a ser cifrado.
 * @param {String} clave Clave de cifrado.
 * @param {Number} opcion La opcion seleccionada [1] cifrar o [2] descifrar.
 * @returns {String} Es el texto ya cifrado o descifrado.
 * @author Luis Enrique Ortiz Ramirez.
 */
function cifrarAlberti(texto, clave, opcion) {
    if (clave.search(/[a-zA-Z]{2}/)) return 'La clave para cifrar debe tener solo dos letras.';
    let claveAlgoritmo = clave.toLowerCase();
    let textoCifrado = '';
    let caracter1 = claveAlgoritmo.charCodeAt(0);
    let caracter2 = claveAlgoritmo.charCodeAt(1);
    let posicionesBarrido = caracter2 - caracter1;
    if (opcion == 1) { // Es verdadero si se elige descrifrar
        posicionesBarrido = caracter1 - caracter2;
    }
    for (const letra of texto) {
        textoCifrado += cambiarLetra(letra, posicionesBarrido);
    }
    return textoCifrado;
}

/**
 * @description Intercambia una letra por otra un numero de posiciones en un alfabeto circular.
 * @param {String} letra Una letra a intercambiar.
 * @param {Number} posiciones Numero de posiciones en el alfabeto circular.
 * @returns {String} Un String con la letra intercambiada.
 * @author Luis Enrique Ortiz Ramirez.
 */
function cambiarLetra(letra, posiciones) {
    if (letra == ' ') return ' ';
    let caracter = letra;
    let posicionAlfabeto = caracter.toUpperCase().charCodeAt(0) - 64;
    if (posiciones < 0) { // Se descrifra
        if (posicionAlfabeto + posiciones < 0) { // Se suma y se vuelve a 26 apuntar un caracter mas alla de la a
            return String.fromCharCode(caracter.charCodeAt(0) + posiciones + 26);
        } else {
            return String.fromCharCode(letra.charCodeAt(0) + posiciones);
        }
    } else { // Se cifra
        if (posicionAlfabeto + posiciones > 26) { // Se suma y se resta 26 apuntar un caracter mas alla de la z
            return String.fromCharCode(caracter.charCodeAt(0) + posiciones - 26);
        } else { // Simplemente se suma
            return String.fromCharCode(letra.charCodeAt(0) + posiciones);
        }
    }
    return caracter;
}
