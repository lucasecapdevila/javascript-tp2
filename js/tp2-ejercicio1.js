/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que
ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

const edadUsuario = prompt('Ingrese su edad')

if (edadUsuario >= 18 && edadUsuario <= 99) {
  document.write('Usted ya puede conducir !')
} else if(edadUsuario > 0 && edadUsuario <= 17){
  document.write('Usted es demasiado joven para conducir')
} else{
  document.write('El valor ingresado no es válido')
}