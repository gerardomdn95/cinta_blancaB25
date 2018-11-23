'use strict'

// let password;
// let correcta = false;

// while(correcta === false) {
//     password = prompt('Ingresa contraseña');

//     if (password === 'gatitos13') {
//         console.log('Correcta');
//         correcta = true;
//     } else {
//         console.log('Contraseña incorrecta');
//     }
// }

// let edad = prompt('Ingresa tu edad');

// if (edad >= 18) {
//     console.log('Debes hacer servicio');
//     let genero = prompt('Ingresa H si eres hombre o M si eres mujer');
//     if (genero === 'H') {
//         console.log('Debes ir a hacer tu servicio');
//         let nacionalidad = prompt('Ingresa S si eres mexicano');
//         if (nacionalidad === 'S') {
//             console.log('Ya no tienes escapatoria');
//         } else {
//             console.log('Eres doblemente libre');
//         }
//     } else {
//         console.log('Eres libre');
//     }
// } else {
//     console.log('Eres libre por ahora')
// }


// AA 0-7
// A 8-12
// B 13-14
// B15 15-17
// C 18 y más


// Se repita 3 veces
// 23 => AA, A, B, B15 y C

let edad = 0;
let x = 0;

for (x; x <= 2; x++) {
    edad = prompt('Ingresa tu edad');
    if (edad <= 7) {
        console.log('AA');
    } else if (edad <= 12) {
        console.log('AA, A');
    } else if (edad <= 14) {
        console.log('AA, A, B');
    } else if (edad <= 17) {
        console.log('AA, A, B, B15');
    } else if (edad >= 18) {
        console.log('AA, A, B, B15, C');
    }
}

let edad = 10;

if(edad >= 18) {
    console.log('Eres mayor de edad');
    let INE = prompt('¿Tienes INE?');
    if(INE === 's') {
        console.log('Puedes votar');
    } else {
        console.log('No puedes votar');
    }
} else if(edad < 0) {
    console.log('No hay edades negativas');
} else {
    console.log('Eres menor de edad');
}