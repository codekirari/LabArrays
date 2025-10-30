function validarContraseña(contraseña) {
    // verificar longitud mínima
    if (contraseña.length < 8) {
        console.log("Vuelva a escribir. Debe tener al menos 8 caracteres");
        return false;
    }
    // inicializar 
    let tieneNumero = false;
    let tieneMayuscula = false;

    // Recorrer cada carácter
    for (let i = 0; i < contraseña.length; i++) {
        let char = contraseña[i];

        // verificar si es un número
        if (char >= '0' && char <= '9') {
            tieneNumero = true;
        }

        // verificar si es una mayúscula (de la A a la Z)
        if (char >= 'A' && char <= 'Z') {
            tieneMayuscula = true;
        }
    }

    
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


// Pruebas
function probarContraseña(clave) {
    console.log(`Comprobando contraseña: "${clave}"`);
    validarContraseña(clave);
}

probarContraseña("hola12345678");   // falta mayúscula
probarContraseña("HOLA123");        // corta
probarContraseña("HolaHola123");    // correcta
