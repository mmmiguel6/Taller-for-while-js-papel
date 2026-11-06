let diasMeta = 0;
for (let dia = 1; dia <= 7; dia++) {
    let pasos = Number(prompt("Pasos del día " + dia + ":"));
    if (pasos >= 8000) {
        diasMeta++;
    }
}
console.log("Cumpliste " + diasMeta + " de 7 días");
if (diasMeta >= 5) {
    console.log("¡Semana activa!");
} else {
    console.log("¡A moverse más!");
}