let estudiantes = Number(prompt("¿Cuántos estudiantes?"));
let suma = 0, aprobados = 0, reprobados = 0, mayor = 0;
for (let i = 1; i <= estudiantes; i++) {
    let nota = Number(prompt("Nota del estudiante:"));
    suma += nota;
    if (nota >= 3.0) {
        aprobados++;
    } else {
        reprobados++;
    }
    if (nota > mayor) {
        mayor = nota;
    }
}
console.log("Aprob. " + aprobados + " Reprob. " + reprobados + " Mayor " + mayor);
console.log("Prom. " + (suma / estudiantes).toFixed(1));