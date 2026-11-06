const secreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0, gano = false;
while (intentos < 5 && !gano) {
    let n = Number(prompt("Adivina (1 a 50):"));
    intentos++;
    if (n === secreto) {
        gano = true;
    } else if (n > secreto) {
        console.log("Más bajo");
    } else {
        console.log("Más alto");
    }
}
if (gano) {
    console.log("¡Ganaste en " + intentos + "!");
} else {
    console.log("Perdiste, era " + secreto);
}