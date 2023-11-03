//* Ejercicios con String

/*
16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

const texto = prompt('Ingrese un texto')

let textoInvertido = texto.split('').reverse().join('')
document.write(textoInvertido)