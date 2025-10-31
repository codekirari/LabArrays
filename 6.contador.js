// Ejercicio 6: Contador de Palabras
// -Editor de texto.
// Crea una función contarPalabras(texto) que retorne el número 
// de palabras en un string (separadas por espacios)

const prompt = require("prompt-sync")({ sigint: true });

let texto = prompt("Ingrese un texto: ");

function contarPalabras(texto) {
    texto = texto.trim();

    if (texto === "") {
        console.log("No hay palabras.");
        return 0;
    }

    let partes = texto.split(" ");

    let contador = 0;

    for (let i = 0; i < partes.length; i++) {
        if (partes[i] !== "") {
            contador = contador + 1;
        }
    }

    console.log("El texto tiene " + contador + " palabra(s).");
    return contador;
}

// 
contarPalabras(texto);