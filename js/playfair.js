function playfairCifrar(texto){
	let textoMin=texto.toLocaleLowerCase();
	
	 let arreglo=[
        ['a','b','c','d','e'],
        ['f','g','h','i','k'],
        ['l','m','n','o','p'],
        ['q','r','s','t','u'],
		['v','w','x','y','z']]
		//dar formato 
		textoMin=formato(textoMin);
		console.log("texto min "+textoMin);
		let msCifrado='';
			for (let i=1;i<=textoMin.length ;i+=2){
				 msCifrado= msCifrado+Cifrado(textoMin[i-1],textoMin[i],arreglo);	
				 console.log("msCifrado "+msCifrado);
			}
		console.log("Salio"+msCifrado);
		return msCifrado;		
	
}
//caso en el qeus on impares 
function formato(texto){
	texto=texto.replace(/ /g,'');
	texto=texto.replace("j","i");

	if (texto.length% 2 != 0){// es par
		texto= texto+'x';
	}
	return texto;
}

function Cifrado(letra1,letra2,arreglo){
	var L1x=0;
	var L1y=0;
	typeof letra1 ==='let'
	console.log("Entre");
	console.log(letra1);
	console.log(letra2);
	
		for (let i=0;i<=4 ;i++){
			for(let j=0;j<=4; j++){
				if(letra1==arreglo[i][j] )
				{
					
						L1x=j;
						L1y=i;
					break;
				} 	
			}
		}
			
		
	
	var L2x=0;
	var L2y=0;
		for (let i=0;i<=4 ;i++){
			for(let j=0;j<=4; j++){
				if(letra2==arreglo[i][j] )
				{
					
						L2x=j;
						L2y=i;
					break;
				} 	
			}
	}

	console.log("L1x"+L1x);
	console.log("L1y"+L1y);
	console.log("L2x"+L2x);
	console.log("L2y"+L2y);
	// aplicacion de reglas 
	// Primer caso l1 y l2 misma fila se recorren a la derecaha 
	if (L1y==L2y){
		L1x+=1;
		L2x+=1;
		console.log("priemr caso");
	//Segundo caso si estan en la misma columna sera el de abajo
	}else if(L1x==L2x){
		L1y+=1;
		L2y+=1;
		console.log("segundo caso");
	//Tercer caso se en cuantran en diferentes filas y columnas 
	}else if((L1x!=L2x) && (L1y!=L2y)){
		var Lsaved=L1x;
		L1x=L2x;
		L2x= Lsaved;

		console.log("tercer caso");
	}	
	// evaluancion 
	L1x=desborde(L1x);
	L1y=desborde(L1y);
	L2x=desborde(L2x);
	L2y=desborde(L2y);
	
	console.log("L1x"+L1x);
	console.log("L1y"+L1y);
	console.log("L2x"+L2x);
	console.log("L2y"+L2y);
	return arreglo[L1y][L1x]+arreglo[L2y][L2x];
}
function desborde(num){
	if(num>4)
		return num-5;
	return num;
}



function playfairDecifrar (texto){
	let textoMin=texto.toLocaleLowerCase();
	
	let arreglo=[
	   ['a','b','c','d','e'],
	   ['f','g','h','i','k'],
	   ['l','m','n','o','p'],
	   ['q','r','s','t','u'],
	   ['v','w','x','y','z']]
	   //dar formato 
	   textoMin=formato(textoMin);
	   let msCifrado='';
		   for (let i=1;i<=textoMin.length ;i+=2){
				msCifrado= msCifrado+decifrado(textoMin[i-1],textoMin[i],arreglo);	
				console.log("msCifrado "+msCifrado);
		   }
	   return msCifrado.substr(0,msCifrado.length-1);	
}

function decifrado(letra1,letra2,arreglo){
	var L1x=0;
	var L1y=0;
	typeof letra1 ==='let'
	console.log("Entre");
	console.log(letra1);
	console.log(letra2);
	
		for (let i=0;i<=4 ;i++){
			for(let j=0;j<=4; j++){
				if(letra1==arreglo[i][j] )
				{
					
						L1x=j;
						L1y=i;
					break;
				} 	
			}
		}
			
		
	
	var L2x=0;
	var L2y=0;
		for (let i=0;i<=4 ;i++){
			for(let j=0;j<=4; j++){
				if(letra2==arreglo[i][j] )
				{
					
						L2x=j;
						L2y=i;
					break;
				} 	
			}
	}
	// aplicacion de reglas 
	// Primer caso l1 y l2 misma fila se recorren a la derecaha 
	if (L1y==L2y){
		L1x-=1;
		L2x-=1;
		console.log("priemr caso");
	//Segundo caso si estan en la misma columna sera el de abajo
	}else if(L1x==L2x){
		L1y-=1;
		L2y-=1;
		console.log("segundo caso");
	//Tercer caso se en cuantran en diferentes filas y columnas 
	}else if((L1x!=L2x) && (L1y!=L2y)){
		var Lsaved=L1x;
		L1x=L2x;
		L2x= Lsaved;

		console.log("tercer caso");
	}	
	// evaluancion 
	L1x=desbordeinf(L1x);
	L1y=desbordeinf(L1y);
	L2x=desbordeinf(L2x);
	L2y=desbordeinf(L2y);
	return arreglo[L1y][L1x]+arreglo[L2y][L2x];
}
function desbordeinf(num){
	if(num<0)
		return num+5;
	return num;
}