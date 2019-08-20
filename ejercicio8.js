let Longitud_vector = Math.round(Math.random()*20);
let array = [Math.round(Math.random()*20)];
let digito_par = new Array();
let digito_impar = new Array();
let adicion_pares = 0;
let adicion_impares = 0;

for(i = 1; i <= Longitud_vector; i++){

    Digito = Math.round(Math.random()*20); 
    array[i] = Digito; 


    if(array[i] % 2 == 0){
        
  
        digito_par .push(array[i]);
       
    }else{

        digito_impar.push(array[i]);
    }
}

adicion_pares = digito_par .reduce(function(a, b){return a + b})
adicion_impares = digito_impar.reduce(function(a, b){return a + b})

console.log('La longitud del vector es',Longitud_vector);
console.log('Los datos generados aleatoriamente para el vector son',array);
console.log('Los digitos pares son',digito_par, 'longitud del vector',digito_par .length);
console.log('Los suma de los digitos pares es',adicion_pares);
console.log('Los digitos impares son',digito_impar, 'longitud del vector',digito_impar.length);
console.log('Los suma de los digitos impares es',adicion_impares);