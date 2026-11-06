let cantidad = Number(prompt("¿Cuántas notas tienes?"));
let suma = 0;
for (let i = 1; i <= cantidad; i++) {
    let nota = Number(prompt("Ingresa la nota:"));
    suma += nota;
}
let promedio = suma / cantidad;
console.log("Promedio: " + promedio);