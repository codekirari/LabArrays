// Ejercicio 4: Calcular Promedio de Notas
// - Plataforma educativa.
// Crea una función calcularPromedio(notas) 
// que reciba un array de notas dado por el usuario 
// (separadas por comas)  y retorne el promedio (redondeado a 2 decimales).


const prompt = require("prompt-sync")({ sigint: true });


let entrada = prompt("Ingrese las notas separadas por comas (por ejemplo: 10,8,9,7):");

let partes = entrada.split(","); 

let notas = [];

for (let i = 0; i < partes.length; i++) {
    let numero = Number(partes[i]); 
    notas.push(numero);
}

// calcular el promedio
function calcularPromedio(notas) {

    if (notas.length === 0) {
        console.log("No hay notas para calcular el promedio.");
        return;
    }

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }

    // Calcular el promedio
    let promedio = suma / notas.length;


    promedio = Math.round(promedio * 100) / 100;

    // Mostrar el resultado
    console.log("El promedio de las notas es: " + promedio);
}

calcularPromedio(notas);
