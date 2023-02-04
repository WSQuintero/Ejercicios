function solution(string) {
  let result = []; // Creamos un array vacío llamado "result" para almacenar el resultado final
  for (strin of string) { // Iteramos sobre cada carácter en el string dado
    if (strin == strin.toUpperCase()) { // Si el carácter es igual a su versión en mayúsculas
      result.push(" "); // Agregamos un espacio en blanco al resultado
      result.push(strin.toUpperCase()); // Agregamos la versión en mayúsculas del carácter al resultado
    } else { // Si el carácter no es igual a su versión en mayúsculas
      result.push(strin); // Agregamos el carácter tal cual al resultado
    }
  }

  return result.join(""); // Convertimos el array en un string y lo retornamos
}
console.log(solution("camelCasingTest"));
