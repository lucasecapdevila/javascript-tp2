//* Ejercicios con String

/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

const texto = prompt('Ingrese un texto')

let vocales = texto.match(/[aeiou]/gi).length

document.write(`El texto tiene ${vocales} vocales.`)