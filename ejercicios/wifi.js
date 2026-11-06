const clave = "parche2026";
let intento, intentos = 0;
do {
    intento = prompt("Ingresa la clave:");
    intentos++;
} while (intento !== clave);
console.log("Conectado - Intentos: " + intentos);