//* Ejercicios con Math

/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique 
el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

const nombreUsuario1 = prompt('Ingrese su nombre')
const edadUsuario1 = parseInt(prompt('Ingrese su edad'))
const nombreUsuario2 = prompt('Ingrese el nombre del segundo usuario')
const edadUsuario2 = parseInt(prompt('Ingrese la edad del segundo usuario'))
const nombreUsuario3 = prompt('Ingrese el nombre del tercer usuario')
const edadUsuario3 = parseInt(prompt('Ingrese la edad del tercer usuario'))

const mayor = Math.max(edadUsuario1, edadUsuario2, edadUsuario3)

if (!isNaN(mayor) && isNaN(nombreUsuario1, nombreUsuario2, nombreUsuario3)) {
  if(mayor === edadUsuario1 && edadUsuario1 === edadUsuario2 && edadUsuario1 === edadUsuario3){
    document.write(`Todos los usuarios tienen la misma edad (${edadUsuario1} años).`)
  } else if(mayor === edadUsuario1 && edadUsuario1 === edadUsuario3){
    document.write(`${nombreUsuario1} y ${nombreUsuario3} son los mayores con ${edadUsuario1} años.`)
  } else if(mayor === edadUsuario2 && edadUsuario2 === edadUsuario3){
    document.write(`${nombreUsuario2} y ${nombreUsuario3} son los mayores con ${edadUsuario2} años.`)
  } else if(mayor === edadUsuario1 && edadUsuario1 === edadUsuario2){
    document.write(`${nombreUsuario1} y ${nombreUsuario2} son los mayores con ${edadUsuario1} años.`)
  } else if(mayor === edadUsuario1){
    document.write(`${nombreUsuario1} es el/la mayor con ${edadUsuario1} años.`)
  } else if(mayor === edadUsuario2){
    document.write(`${nombreUsuario2} es el/la mayor con ${edadUsuario2} años.`)
  } else{
    document.write(`${nombreUsuario3} es el/la mayor con ${edadUsuario3} años.`)
  }
} else{
  alert('Un dato fue ingresado de forma errónea. Intente nuevamente')
}