// Define la función "persistence" que toma un número como argumento
function persistence(num) {
  // Declara un arreglo vacío para almacenar los resultados
  let results = [];
  // Convierte el número de entrada en una cadena y la divide en un arreglo de dígitos
  let numeros = String(num).split("");

  // Mientras el número de dígitos sea mayor a 1, repite el ciclo
  while (numeros.length > 1) {
    // Utiliza el método reduce para multiplicar todos los dígitos juntos
    let resultado = numeros.reduce((acum, nu) => {
      return Number(acum) * Number(nu);
    });
    // Agrega el resultado al arreglo de resultados
    results.push(resultado);
    // Actualiza el arreglo de números con el nuevo resultado
    numeros = String(resultado).split("");
  }
  //Retorna la longitud del arreglo results
  return results.length;
}

persistence(999);
