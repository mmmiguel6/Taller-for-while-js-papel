let n = Number(prompt("¿Hasta qué número juegan?"));
for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("¡Chévere y bacano!");
    } else if (i % 3 === 0) {
        console.log("Chévere");
    } else if (i % 5 === 0) {
        console.log("Bacano");
    } else {
        console.log(i);
    }
}