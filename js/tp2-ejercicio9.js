/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles 
son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo:

1
2
3
4 (Múltiplo de 4)
5-
——————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

for(let i = 1; i <= 500; i++){
  //  Imprimo todos los números
  document.write(i)
  
  //  Reviso condiciones
  if(i % 4 === 0 && i % 9 === 0){ //  Que el número sea múltiplo de ambos (4 y 9)
    document.write(` (Múltiplo de 4 y 9)`)
  } else if(i % 4 === 0){ //  Que el número sea múltiplo solo de 4
    document.write(` (Múltiplo de 4)`)
  } else if(i % 9 === 0){ //  Que el número sea múltiplo solo de 9
    document.write(` (Múltiplo de 9)`)
  }

  //  Dibujo una línea horizontal cada 5 líneas
  if(i % 5 === 0){
    document.write('<br>')
    document.write('——————————————————')
  }

  document.write('<br>')
}
