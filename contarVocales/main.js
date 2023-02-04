function getCount(str) {
  // Declara un arreglo con las vocales del alfabeto español
  let vocales = ["a", "e", "i", "o", "u"];

  // Declara una variable para contar el número de vocales en la cadena de entrada
  let contador;
  // Verifica si la cadena de entrada está vacía
  if ([str]) {
    contar(str);
  } else {
    // Divide la cadena de entrada en un arreglo de caracteres individuales
    let arrayVocales = str.slice().split("");
    // Llamada a otra función y se le pasa el arreglo como argumento
    contar(arrayVocales);
  }
  //La funcion contar recibe un arreglo como argumento
  function contar(array) {
    // utiliza dos ciclos for anidados para iterar sobre cada elemento del arreglo de entrada y cada elemento del arreglo vocales
    for (let o = 0; o < array.length; o++) {
      for (let i = 0; i < vocales.length; i++) {
        // si el elemento actual del arreglo de entrada coincide con alguna de las vocales en el arreglo "vocales", aumenta la variable "contador" en 1
        if (array[o] == vocales[i]) {
          if (contador) {
            contador++;
          } else {
            contador = 1;
          }
        }
      }
    }
  }
  //verifica si la variable contador es undefined
  if (!contador) {
    return 0;
  } else {
    //devuelve la variable contador que es el número de vocales encontradas en la cadena de entrada
    return contador;
  }
}

console.log(getCount("holaa"));

// [ 'm', 'y', ' ', 'p', 'y', 'x' ]
