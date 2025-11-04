// Ejercicio 8: Cambio de Moneda
// -App de viajes.
// Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
// pedir al usuario monto en COP y la moneda con la que desea hacer la converción.


const prompt = require("prompt-sync")({ sigint: true });

let monto = Number(prompt("Ingrese la cantidad en COP: "));

let moneda = prompt("Escribe a qué moneda desea convertir (USD / EUR)?: ");
function convertirMoneda(monto, monedaDestino){
    const tasaUSD = 0.00024;
    const tasaEUR = 0.00022;
    if(monedaDestino === "USD"){
        return monto * tasaUSD;
    } else if(monedaDestino === "EUR"){
        return monto * tasaEUR;
    } else {
        return null
    }
}
let resultado = convertirMoneda(monto, moneda.toUpperCase());
if(resultado === null){
    console.log("Moneda no válida");
}else{
    console.log(`${monto} COP equivalen a ${resultado} ${moneda.toUpperCase()}`)
}
