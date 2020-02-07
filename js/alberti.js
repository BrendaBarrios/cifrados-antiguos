
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
    let a = clave.toUpperCase().charCodeAt(0) - 64;
    let b = clave.toUpperCase().charCodeAt(1) - 64;
    let mayus;
    let minus;
    let textoCifrado = '';
    if (opcion == 0) { // Es verdadero si se elige descrifrar
        mayus = generarMapaMayusculas(a, b);
        minus = generarMapaMinusculas(a, b);
    } else {
        mayus = generarMapaMayusculas(b, a);
        minus = generarMapaMinusculas(b, a);
    }
    for (const letra of texto) {
        if (letra == ' ') textoCifrado += ' ';
        else {
            if (letra.charCodeAt(0) > 96) {
                textoCifrado += minus[letra];
            }
            else {
                textoCifrado += mayus[letra];
            }
        }
    }
    return textoCifrado;
}

/**
 * @description Genera un mapeo del alfabeto en mayusculas usando como incio de clave valor a y b.
 * @param {Number} letra Primer letra de la clave.
 * @param {Number} posiciones Segunda letra de la clave.
 * @returns {Map} Un mapa con las letras cambiadas de acuerdo a la clave.
 * @author Luis Enrique Ortiz Ramirez.
 */
function generarMapaMayusculas(a, b) {
    let mapa = new Map();
    for (let i = 0; i < 26; i++) {
        if (a > 26) a -= 26;
        if (b > 26) b -= 26;
        mapa[String.fromCharCode(64 + a)] = String.fromCharCode(64 + b);
        a++;
        b++;
    }
    return mapa;
}

/**
 * @description Genera un mapeo del alfabeto en minusculas usando como incio de clave valor a y b.
 * @param {Number} letra Primer letra de la clave.
 * @param {Number} posiciones Segunda letra de la clave.
 * @returns {Map} Un mapa con las letras cambiadas de acuerdo a la clave.
 * @author Luis Enrique Ortiz Ramirez.
 */
function generarMapaMinusculas(a, b) {
    let mapa = new Map();
    for (let i = 0; i < 26; i++) {
        if (a > 26) a -= 26;
        if (b > 26) b -= 26;
        mapa[String.fromCharCode(96 + a)] = String.fromCharCode(96 + b);
        a++;
        b++;
    }
    return mapa;
}
