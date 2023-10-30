/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número
deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá
indicarse la suma total de los números introducidos.
*/

let num = 0

while (confirm('¿ Desea agregar un número ?')){
  let numUsuario = prompt('Ingrese un número')
  if(isNaN(numUsuario)){
    alert('El valor ingresado no es un número')
  } else{
    numUsuario = parseInt(numUsuario)
    num += numUsuario
  }
}

document.write(`El resultado total de la suma de los números ingresados es ${num}`)