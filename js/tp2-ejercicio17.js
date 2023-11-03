//* Ejercicios con String

/*
17- Realiza un script que muestre la posición de la primera vocal de un texto 
introducido por teclado.
Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
*/

const texto = prompt('Ingrese un texto')

let vocales = texto.match(/[aeiou]/gi)
let primerVocal = vocales[0]
document.write(`La vocal ${primerVocal} es la primer vocal del texto.`);