// Expone el numero mas grande de un array.

let numeros = [10,20,6,567,9,4,13];
let maxima = 0;

for (let i=0; i< numeros.length; i++) {
    if (numeros[i]> maxima) {
            maxima = numeros[i];
    }
}

console.log(maxima);