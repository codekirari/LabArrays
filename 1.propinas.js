// Ejercicio 1: Calculadora de Propinas

// - Una app para calcular propinas en restaurantes.
// Crea una función calcularPropina(total, porcentaje) que 
// reciba el total de la cuenta y el porcentaje de 
// propina, y retorne el monto final a pagar (total + propina).

function calcularPropina (total, porcentaje) {

    const factorPropina = porcentaje / 100; //para pode multiplicarlo
    const propina = total * factorPropina; //cuánto es en propina
    const montoFinal = total + propina; //total
    return montoFinal;//Devolver el resultado final
}
//comida ejemplo:
const costoComida = 150000;  
const propinaAplicada = 10; 

console.log("La comida costó: $" + costoComida);
console.log("La propina: " + propinaAplicada + "%"); 

// llamar la funcion
const resultadoFinal = calcularPropina(costoComida, propinaAplicada);

// resultado
console.log("El total de la comida es: $" + resultadoFinal); 