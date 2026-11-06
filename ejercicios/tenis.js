let precio = Number(prompt("Precio de los tenis:"));
let ahorrado = 0, semanas = 0;
while (ahorrado < precio) {
    let ahorroSemanal = Number(prompt("Ahorro semanal:"));
    ahorrado += ahorroSemanal;
    semanas++;
}
console.log("Semanas: " + semanas);