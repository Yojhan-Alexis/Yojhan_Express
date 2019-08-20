let numero_estudiantes = 25;
let array = [Math.round(Math.random()*5)];
let Suma_calificaciones= 0;

for(i = 1; i <= numero_estudiantes; i++){

   calificaciones = Math.round(Math.random()*5); 
    array[i] = calificaciones;
}

Suma_calificaciones = array.reduce(function(a, b){return a + b})

console.log('Array generado aleatoriamente', array);
console.log('La suma de todas las calificaciones son:',Suma_calificaciones);
console.log('El promedio total del salón es:',Suma_calificaciones/numero_estudiantes);