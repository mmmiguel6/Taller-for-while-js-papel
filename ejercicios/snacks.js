let opcion, total = 0;
do {
    opcion = Number(prompt("1 Papas $3000 - 2 Gaseosa $2500 - 0 Pagar"));
    if (opcion === 1) {
        total += 3000;
    } else if (opcion === 2) {
        total += 2500;
    } else if (opcion !== 0) {
        console.log("Opción no válida");
    }
} while (opcion !== 0);
console.log("Total: $" + total);