
/**
 * @description Algoritmo polybios realiza la acción cifrar.
 * @param {String} texto Es la cadena de texto ingresada por el usuario.
 * @returns {String} Mensaje cifrado.
 * @author Brenda Yasmin Barrios Becerra.
 */
function polybiosCifrar(texto){
    let conversor_texto_minusculas=texto.toLocaleLowerCase();
    let mensajecifrado=" ";
    let arreglo=[
        ['a','b','c','d','e'],
        ['f','g','h','i/j','k'],
        ['l','m','n','o','p'],
        ['q','r','s','t','u'],
        ['v','w','x','y','z']

    ]
    for (let letra of conversor_texto_minusculas){
        for (let i=0;i<=4 ;i++){
            for(let j=0;j<=4; j++){
                if (letra==" " ){
                   mensajecifrado+=" ";
                }
                if(letra==arreglo[i][j]){
                    
                    coordenadas=["A","B","C","D","E"];
                    let corX=coordenadas[i];
                    let corY=coordenadas[j];

                    mensajecifrado+=corX+corY;
                    
                }
            }
        }  
            
    }  
    return  mensajecifrado; 
    
}

/**
 * @description Algoritmo polybios realiza la acción decifrar.
 * @param {String} texto Es la cadena de texto ingresada por el usuario.
 * @returns {String} Mensaje decifrado.
 * @author Brenda Yasmin Barrios Becerra.
 */
function polybiosDescifrar(texto){
    let conversor_texto_minusculas=texto.toLocaleUpperCase();
    let mensajecifrado="";
    let arreglo=[
        ['a','b','c','d','e'],
        ['f','g','h','i/j','k'],
        ['l','m','n','o','p'],
        ['q','r','s','t','u'],
        ['v','w','x','y','z']
    ]

    coordenadas=["A","B","C","D","E"];
    for (let i=0; i<conversor_texto_minusculas.length;i+=1){
            if (conversor_texto_minusculas[i]==" " ) mensajecifrado+=" ";

            else{
                let pos1=coordenadas.indexOf(conversor_texto_minusculas[i]);
                let pos2=coordenadas.indexOf(conversor_texto_minusculas[i+1]);
                mensajecifrado+=arreglo[pos1][pos2];
                i++;
         
            }
        
    }  
    return  mensajecifrado;  
}

