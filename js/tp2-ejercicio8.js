/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique 
el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

const filas = parseInt(prompt('Ingrese un número entre 1 y 50'))

if(!isNaN(filas) && filas > 0 && filas <= 50){
  for(let iFilas = 0; iFilas <= filas; iFilas++){
    for(let contador = 1; contador <= iFilas; contador++){
      document.write(contador)
    }
    document.write('<br>')
  }  
} else{
  alert('Ingresó un valor incorrecto.')
}