let edad;
do {
    edad = Number(prompt("Ingresa tu edad:"));
} while (edad < 14 || edad > 99);
console.log("Registro exitoso: " + edad);