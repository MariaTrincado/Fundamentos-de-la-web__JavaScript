/*Imprimir números del 1 al 100, cuando el número sea múltiplo de 3 dirá Fizz, 
cuando el número sea múltiplo de 5 dirá Buzz y cuando se cumplan ambas será FizzBuzz*/

for (let i = 1; i <= 100; i= i+1) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}