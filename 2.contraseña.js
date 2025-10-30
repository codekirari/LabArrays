// Ejercicio 2: Validar Contraseña
// - Formulario de registro.
// Crea una función validarContraseña(contraseña) que retorne true si:
// - Tiene al menos 8 caracteres. - Incluye un número. - Incluye una mayúscula


function validarContraseña (contraseña){
if (contraseña.length< 8) {
    console.log("Vuelva a escribir. Debe tener al menos 8 caracteres")
    return false //salir aqui de la funcion
}

    const tieneNumero = /[0-9]/.test(contraseña);
    const tieneMayuscula = /[A-Z]/.test(contraseña);

    if (tieneNumero && tieneMayuscula) {
        console.log("Contraseña Válida");
        return true;
    } else {
        console.log("Contraseña No Válida");
        if (!tieneNumero) console.log("Error, debe incluir un número.");
        if (!tieneMayuscula) console.log("Falla, debe incluir una mayúscula.");
        return false;
    }


}

// prueba

function probarContraseña(clave) {
    console.log(`Comprobando contraseña: "${clave}"`);
    validarContraseña(clave);

}

probarContraseña("hola12345678");         // falta mayuscula
probarContraseña("HOLA123");             // corta
probarContraseña("HolaHola123");          // correcta
