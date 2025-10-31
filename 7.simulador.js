// Ejercicio 7: Simulador de Cajero Automático
// -App bancaria.
// Crea una función retirarDinero(saldo, monto) que:
// Pide al usuario su saldo actual y el monto a retirar.
// Muestra el nuevo saldo o "Fondos insuficientes"

const prompt = require("prompt-sync")({ sigint: true });

let saldoActual = Number(prompt("Ingrese su saldo actual: "));
let montoRetirar = Number(prompt("Ingrese el monto a retirar: "));

function retirarDinero(saldoActual, montoRetirar) {
    if (montoRetirar<=saldoActual)  {
        //calcular nuevo salgo
        let nuevoSaldo = saldoActual - montoRetirar;
        console.log("Retiro exitoso. Su nuevo saldo es: $" + nuevoSaldo);
        return nuevoSaldo;
    } else {
        console.log("No tiene la cantidad suficiente.");
        return saldoActual;
    }
}

retirarDinero(saldoActual, montoRetirar);