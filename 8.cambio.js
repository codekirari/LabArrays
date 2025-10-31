// Ejercicio 8: Cambio de Moneda
// -App de viajes.
// Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
// pedir al usuario monto en COP y la moneda con la que desea hacer la converción.


const prompt = require("prompt-sync")({ sigint: true });

let monto = Number(prompt("Ingrese la cantidad en COP: "));