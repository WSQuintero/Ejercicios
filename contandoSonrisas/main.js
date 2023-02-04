// Este código cuenta la cantidad de caritas sonrientes en un arreglo de strings
// Función que cuenta el número total de caras sonrientes en el arreglo
function countSmileys(arr) {
  // Define los caracteres posibles para los ojos, nariz y boca
  let smyles = {
    ojos: [":", ";"],
    nariz: ["-", "~"],
    boca: [")", "D"],
  };
  // Inicializa un contador en cero
  let contador = 0;
  // Separa cada elemento del arreglo en un arreglo de caracteres individuales
  let separado = arr.map((a) => {
    let arraySmyle = a.slice().split("");
    return arraySmyle;
  });

  // Itera sobre cada sonrisa separada
  for (sonrisa of separado) {
    // Si la sonrisa contiene los tres caracteres posibles para ojos, nariz y boca
    if (
      smyles.ojos.includes(sonrisa[0]) &&
      smyles.nariz.includes(sonrisa[1]) &&
      smyles.boca.includes(sonrisa[2])
    ) {
      // Aumenta el contador en 1
      contador++;
    } else {
      // Si la sonrisa contiene solo los caracteres para ojos y boca
      if (
        smyles.ojos.includes(sonrisa[0]) &&
        smyles.boca.includes(sonrisa[1])
      ) {
        // Aumenta el contador en 1
        contador++;
      }
    }
  }
  // Devuelve el número total de caras sonrientes encontradas
  return contador;
}

// Imprime el resultado de la función en la consola
console.log(countSmileys([":-)", ";~D", ":-D", ":_D"]));
