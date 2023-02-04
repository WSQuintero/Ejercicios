function duplicateEncode(word) {
  // primero convertimos todos los caracteres de la palabra en minúsculas y los separamos en un array de caracteres
  let wordArray = word.toLowerCase().split("");
  // creamos una copia del array original utilizando el método slice() para evitar modificar el array original mientras se ordena
  let ordenada = wordArray.slice().sort();

  // creamos un objeto vacío para contar las veces que cada carácter aparece en el array ordenado
  let contador = {};
  // creamos un array vacío para almacenar el código de salida
  let codigo = [];
  // iteramos sobre el array ordenado y aumentamos el contador del carácter actual en el objeto contador
  ordenada.forEach(function (item) {
    if (contador[item]) {
      contador[item]++;
    } else {
      contador[item] = 1;
    }
  });

  // iteramos sobre el array original y agregamos "(" o ")" al array codigo dependiendo de si el carácter es un duplicado o no
  wordArray.forEach((elemento) => {
    if (contador[elemento] > 1) {
      codigo.push(")");
    } else {
      codigo.push("(");
    }
  });
  // devolvemos el array codigo unido en una sola cadena
  return codigo.join("");
}

duplicateEncode("Success");
