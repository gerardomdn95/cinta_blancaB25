'use strict'

let j1 = '';
let j2 = '';

function show() {

    if (document.getElementById('j1Piedra').checked) {
        j1 = 'piedra';
    }

    if (document.getElementById('j1Papel').checked) {
        j1 = 'papel';
    }

    if (document.getElementById('j1Tijera').checked) {
        j1 = 'tijera';
    }

    if (document.getElementById('j2Piedra').checked) {
        j2 = 'piedra';
    }

    if (document.getElementById('j2Papel').checked) {
        j2 = 'papel';
    }

    if (document.getElementById('j2Tijera').checked) {
        j2 = 'tijera';
    }


    console.log('J1: ' + j1);
    console.log('J2: ' + j2);

}

function jugar() {

    show();

    // EMPATES
    if (j1 === 'piedra' && j2 === 'piedra') {
        console.log('Empate');
        resultado.innerHTML = 'Resultado: Empate';
        j1 = '';
        j2 = '';
    } else if (j1 === 'papel' && j2 === 'papel') {
        console.log('Empate');
        resultado.innerHTML = 'Resultado: Empate';
        j1 = '';
        j2 = '';
    } else if (j1 === 'tijera' && j2 === 'tijera') {
        console.log('Empate');
        resultado.innerHTML = 'Resultado: Empate';
        j1 = '';
        j2 = '';
    }

    // GANA J1
    if (j1 === 'piedra' && j2 === 'tijera') {
        console.log('Gana J1');
        resultado.innerHTML = 'Resultado: Gana J1'
    } else if (j1 === 'papel' && j2 === 'piedra') {
        console.log('Gana J1');
        resultado.innerHTML = 'Resultado: Gana J1';
        j1 = '';
        j2 = '';
    } else if (j1 === 'tijera' && j2 === 'papel') {
        console.log('Gana J1');
        resultado.innerHTML = 'Resultado: Gana J1';
        j1 = '';
        j2 = '';
    }

    // GANA J2
    if (j1 === 'piedra' && j2 === 'papel') {
        console.log('Gana J2');
        resultado.innerHTML = 'Resultado: Gana J2';
        j1 = '';
        j2 = '';
    } else if (j1 === 'papel' && j2 === 'tijera') {
        console.log('Gana J2');
        resultado.innerHTML = 'Resultado: Gana J2';
        j1 = '';
        j2 = '';
    } else if (j1 === 'tijera' && j2 === 'piedra') {
        console.log('Gana J2');
        resultado.innerHTML = 'Resultado: Gana J2';
        j1 = '';
        j2 = '';
    }

}







