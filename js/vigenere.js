

function cifrarVigenere(texto, clave, accion) {
    if (clave.length < 1) return 'Es necesaria una clave para cifrar.';
    let tablaVigenere = [];
    for (let i = 0; i < 26; i++) {
        tablaVigenere.push([]);
        for (let j = 0; j < 26; j++) {
            if (j + i > 25)
            tablaVigenere[i].push(String.fromCharCode(65 + j + i - 26));
            else
            tablaVigenere[i].push(String.fromCharCode(65 + j + i));
        }
    }
    let posicion = 0;
    let mensajeCifrado = '';
    for (const letra of texto) {
        if (letra == ' ' ) mensajeCifrado += ' ';
        else {
            if (accion == 0) {
                if (letra.charCodeAt(0) > 96) {
                    let i = letra.toUpperCase().charCodeAt(0) - 65;
                    let j = clave[posicion].toUpperCase().charCodeAt(0) - 65;
                    mensajeCifrado += tablaVigenere[i][j].toLowerCase();
                } else {
                    let i = letra.toUpperCase().charCodeAt(0) - 65;
                    let j = clave[posicion].toUpperCase().charCodeAt(0) - 65;
                    mensajeCifrado += tablaVigenere[i][j].toUpperCase();
                }
            } else {
                mensajeCifrado += descifrar(letra, clave[posicion], tablaVigenere);
            }
            posicion += 1;
        }
        if (posicion >= clave.length) {
            posicion = 0;
        }
    }
    return mensajeCifrado;
}

function descifrar(letra, letraClave, tablaVigenere) {
    let posicionAlfabetoClave = letraClave.toUpperCase().charCodeAt(0) - 65;
    let indiceClave = tablaVigenere[posicionAlfabetoClave].indexOf(letra.toUpperCase());
    let alfabeto = [];
    for (let i = 65; i < 91; i++) {
        alfabeto.push(String.fromCharCode(i));
    }
    let cifrado = alfabeto[indiceClave];
    return letra.charCodeAt(0) > 96 ? cifrado.toLowerCase() : cifrado.toUpperCase();
}
