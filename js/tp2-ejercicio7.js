/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique
el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/


let filas = prompt('Ingrese un número entre 1 y 50. Será la cantidad de filas en una pirámide inversa.')

if(isNaN(filas)){
  alert('El valor ingresado no es un número.')
} else if(filas > 50 || filas <= 0){
  alert('El número debe estar entre 1 y 50')
} else{
  for(let i = filas; i >= 1; i--){
    for(let contador = i; contador >= 1; contador--){
      document.write(i)
    }
    document.write('<br>')
  }
}