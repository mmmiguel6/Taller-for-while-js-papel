let saldo = Number(prompt("Saldo de tu tarjeta:"));
const pasaje = 2950;
let viajes = 0;
while (saldo >= pasaje) {
    saldo -= pasaje;
    viajes++;
}
console.log("Viajes: " + viajes + " Te sobran $" + saldo);