/*El código intToRoman es una función que convierte un número entero 
dado en su representación en números romanos. La función se implementa 
de la siguiente manera:

    Se crea un mapa que contiene objetos con los números y sus correspondientes simbolos numerales romanos. Cada objeto tiene dos propiedades: num, que representa el número decimal, y roman, que representa el símbolo numeral romano correspondiente.

    Se inicializa una variable result con un valor vacío, que se usará para almacenar la representación en números romanos del número decimal dado.

    Se itera sobre el mapa de números y simbolos numerales romanos. Para cada objeto en el mapa, se verifica si el número decimal dado es mayor o igual al número num en el objeto. Si es así, se agrega el símbolo numeral romano correspondiente, roman, a la variable result y se resta num del número decimal dado.

    Se repite el proceso anterior hasta que el número decimal dado sea cero o menor.

    Finalmente, se devuelve el valor de result como la representación en números romanos del número decimal dado.

Es importante tener en cuenta que el mapa de números y simbolos numerales romanos incluye todas las reglas para la formación de números romanos, como por ejemplo, que se deben utilizar símbolos romanos combinados para representar números mayores o iguales a 1000 o 900. De esta manera, el código es capaz de generar la representación correcta de un número decimal dado.*/
function intToRoman(number) {
  const map = [
    { num: 1000, roman: "M" },
    { num: 900, roman: "CM" },
    { num: 500, roman: "D" },
    { num: 400, roman: "CD" },
    { num: 100, roman: "C" },
    { num: 90, roman: "XC" },
    { num: 50, roman: "L" },
    { num: 40, roman: "XL" },
    { num: 10, roman: "X" },
    { num: 9, roman: "IX" },
    { num: 5, roman: "V" },
    { num: 4, roman: "IV" },
    { num: 1, roman: "I" },
  ];
  let result = "";
  for (let i = 0; i < map.length; i++) {
    while (number >= map[i].num) {
      result += map[i].roman;
      number -= map[i].num;
    }
  }
  return result;
}
console.log(intToRoman(1990));
