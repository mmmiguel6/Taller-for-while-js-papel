let gasto = Number(prompt("Gasto (0 para terminar):"));
let total = 0, compras = 0;
while (gasto !== 0) {
    total += gasto;
    compras++;
    gasto = Number(prompt("Gasto (0 para terminar):"));
}
console.log("Total: $" + total + " - Compras: " + compras);