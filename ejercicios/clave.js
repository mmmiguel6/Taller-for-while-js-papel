let clave = prompt("Crea tu contraseña:");
let numeros = 0;
for (let i = 0; i < clave.length; i++) {
    let letra = clave[i];
    if (letra >= '0' && letra <= '9') {
        numeros++;
    }
}
if (clave.length >= 8 && numeros >= 2) {
    console.log("Segura");
} else {
    console.log("Débil (" + numeros + " numeros)");
}