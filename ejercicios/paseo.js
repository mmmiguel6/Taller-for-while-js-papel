let total = Number(prompt("Asientos del bus:"));
let pares = 0;
for (let a = 2; a <= total; a += 2) {
    console.log(a);
    pares++;
}
console.log("Asientos pares: " + pares);