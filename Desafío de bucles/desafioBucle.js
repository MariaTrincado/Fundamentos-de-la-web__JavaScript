//Imprimir impares: 1-20 Usando un bucle. Código que haga que console.log imprima todos los valores impares del 1 al 20.

for(let i = 1; i<=20;i++){
    if (i%2 !== 0){
        console.log(i);
    }
}

// Disminuir múltiplos de 3: Usando un bucle. Código que haga que console.log imprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.

for(let i = 100; i>=0;i--){
    if (i%3 == 0){
        console.log(i);
    }
}

//Imprime la secuencia: Código que haga que console.log imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.

let secuencia = [4, 2.5, 1, -0.5, -2, -3.5];

for (let i = 0; i < secuencia.length; i++) {
    console.log(secuencia[i]);
}


//Sigma: Código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100 (5050 al final).

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);


//Factorial: Código que multiplique todos los valores del 1 al 12 en una variable producto. Console.log dé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. (479001600al final).
let mult = 1;
for (let i = 1; i <= 12; i++) {
    mult = mult * i;
}
console.log(mult);
