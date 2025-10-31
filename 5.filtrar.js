// Ejercicio 5: Filtrar Usuarios por Edad
// Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), 
// crea una función 
// filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que
// cumplen con la edad mínima, la 
// cual será dada por el usuario, es decir, si el usuario escribe 18,
// debería decirle que personas de la lsita cumplen con tener más de 18.

const prompt = require("prompt-sync")({ sigint: true });


let usuarios = [
    { nombre: "Zuko", edad: 5 },
    { nombre: "Andres", edad: 50 },
    { nombre: "Jose", edad: 30 },
    { nombre: "Pedro", edad: 12 },
    { nombre: "Sofía", edad: 20 }
];

// pedir la edad mínima al usuario
let edadMinima = Number(prompt("Ingrese la edad mínima: "));

// 3️⃣ Función para filtrar usuarios
function filtrarUsuarios(usuarios, edadMinima) {
    let resultado = []; //para guardar los que si cumplen

    // luego recorrer el array con los usuarios
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].edad >= edadMinima) {
            resultado.push(usuarios[i]);
        }
    }

    // sino:
    if (resultado.length === 0) {
        console.log("Ningún usuario cumple con tener al menos " + edadMinima + " años.");
    } else {
        console.log("Usuarios con al menos " + edadMinima + " años:");
      
        for (let i = 0; i < resultado.length; i++) {
            console.log("- " + resultado[i].nombre + " (" + resultado[i].edad + " años)");
        }
    }
    return resultado;
}


filtrarUsuarios(usuarios, edadMinima);