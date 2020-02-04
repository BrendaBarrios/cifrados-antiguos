
function polybios(texto){
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

