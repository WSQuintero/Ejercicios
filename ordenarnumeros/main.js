function descendingOrder(n){
  // primero convertimos el número en una cadena y la separamos en un array de caracteres
  let hola=String(n).split("");  
  // luego convertimos cada carácter del array a un número
  hola2=hola.map(num=>{
    return Number(num);
  })
  // ordenamos el array de números en orden descendente utilizando una función de comparación
  let ordenada=hola2.sort((a,b)=>b-a);
  // finalmente, convertimos el array ordenado de números de vuelta a un número uniendo los caracteres y parseando a Number
  return Number(ordenada.join(''));
}