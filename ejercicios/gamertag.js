let gamertag = prompt("Tu gamertag:");
let alReves = "";
for (let i = gamertag.length - 1; i >= 0; i--) {
    alReves += gamertag[i];
}
console.log(alReves);