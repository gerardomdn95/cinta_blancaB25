let j1 = prompt('J1 Ingresa tu opción:');
let j2 = prompt('J2 Ingresa tu opción:');

console.log('J1: ' + j1);
console.log('J2: ' + j2);

// EMPATES
if (j1 === 'piedra' && j2 === 'piedra') {
    console.log('Empate');
} else if (j1 === 'papel' && j2 === 'papel') {
    console.log('Empate');
} else if (j1 === 'tijeras' && j2 === 'tijeras') {
    console.log('Empate');
}

// GANA J1
if(j1 === 'piedra' && j2 === 'tijeras') {
    console.log('Gana J1');
} else if(j1 === 'papel' && j2 === 'piedra') {
    console.log('Gana J1');
} else if(j1 === 'tijeras' && j2 === 'papel') {
    console.log('Gana J1');
}

// GANA J2
if(j1 === 'piedra' && j2 === 'papel') {
    console.log('Gana J2');
} else if(j1 === 'papel' && j2 === 'tijeras') {
    console.log('Gana J2');
} else if(j1 === 'tijeras' && j2 === 'piedra') {
    console.log('Gana J2');
}


// Lunes Verde Rojo
// gris amarillo

// let engomado = prompt('Ingresa tu engomado');

// if(engomado === 'verde' || engomado === 'rojo' || engomado === 'gris'){
//     console.log('No circulas');
// } else {
//     console.log('Circulas')
// }

// && 
// ||