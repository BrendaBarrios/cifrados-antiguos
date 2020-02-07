
const n1 = [[2, 4, 7, 4], [3, 3, 2, 8], [5, 6, 3, 0]];
const n2 = [[1, 1, 1, 4], [2, -3, 1, 2], [1, 2, -1, -1]];
const n3 = [[1, 1, 2, -1], [1, 3, -6, 7], [2, -1, 2, 0]];
const n4 = [[4, -4, -2, 0], [0, 0, 0, 0], [-2, 2, -6, 0]];
const n5 = [[1, 3, 2, 2], [2, 7, 7, -1], [2, 5, 2, 7]];

/**
 * @description Algoritmo de cifrado Hill.
 * @param {String} texto Texto a ser cifrado.
 * @param {String} clave Clave de cifrado, es una cadena con formato de matriz en javascript.
 * @param {Number} opcion La opcion seleccionada [1] cifrar o [2] descifrar.
 * @returns {String} Es el texto ya cifrado o descifrado.
 * @author Luis Enrique Ortiz Ramirez.
 */
function cifrarHill(texto, clave, opcion) {
    let matriz;
    try {
        matriz = eval(clave);
    } catch (error) {
        console.log(error);
        return 'Introduce una matriz valida en el formato: [[1,2,..n][1,2,..n]..n]';
    }
    if (Array.isArray(matriz) && matriz.length > 0 && Array.isArray(matriz[0])) {
        console.log(matriz, obtenerTranspuesta(matriz));
    } else {
    }
    let claveAlgoritmo = clave.toLowerCase();
    let textoCifrado = '';
    if (opcion == 0) { // Es verdadero si se elige descrifrar
    }
    for (const letra of texto) {
        //textoCifrado += cambiarLetra(letra, posicionesBarrido);
    }
    return textoCifrado;
}

/**
 * @description Indica si una matriz tiene inversa.
 * @param {Array<Array<Number>} matriz Matriz de numeros enteros.
 * @returns {Array<Array<Number>} Indica si la matriz tiene inversa.
 * @author Luis Enrique Ortiz Ramirez.
 */
function obtenerTranspuesta(matriz) {
    let transpuesta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        transpuesta.push([]);
        for (let j = 0; j < matriz.length; j++) {
            transpuesta[i].push(0);
        }
    }
    for (let i = 0; i < matriz[0].length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            transpuesta[i][j] = matriz[j][i];
        }
    }
    return transpuesta;
}

function hacerDiagonalMatrizGauss(matriz) {
    let matrizResultante = [];
    for (let i = 0; i < matriz.length; i++) {
        matrizResultante.push([]);
        for (let j = 0; j < matriz[0].length; j++) {
            //matrizResultante[]
        }
    }
}
