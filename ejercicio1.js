let array = [Math.round(Math.random()*100)];
let DigitoMayor = array[0];
let DigitoMenor = array[0];

for(i = 1; i <= 10; i++){

    Digito= Math.round(Math.random()*100);
    array[i] = Digito;
}

console.log(array);
 
for(i = 0; i < array.length; i++){

    if (array[i] > DigitoMayor){
        DigitoMayor = array[i];
    }

    if (array[i] < DigitoMenor){
        DigitoMenor = array[i];
    }
}

console.log('El Digito mayor es', DigitoMayor);
console.log('El Digito menor es', DigitoMenor);