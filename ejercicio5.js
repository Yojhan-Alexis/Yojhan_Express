let array = [Math.round(Math.random()*100)];

for(i = 1; i <= 10; i++){

    Digito = Math.round(Math.random()*100);
    array[i] = Digito; 
}


let DigitoMayor = array[0];
let DigitoMenor = array[0];
let DigitoPar = new Array();
let DigitoImpar = new Array();
 
for(i = 0; i < array.length; i++){

    if (array[i] > DigitoMayor){
        DigitoMayor = array[i];
    }

    if (array[i] < DigitoMenor){
        DigitoMenor = array[i];
    }
 
    if(array[i] % 2 == 0){

        DigitoPar.push(array[i]);
       
    }else{

        DigitoImpar.push(array[i]);
    }
}

console.log('Array generado aleatoriamente',array);
console.log('El # mayor es', DigitoMayor);
console.log('El # menor es', DigitoMenor);
console.log('Los digitos pares del array son',DigitoPar);
console.log('Los digitos impares del array son',DigitoImpar);


