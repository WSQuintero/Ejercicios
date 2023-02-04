// /*El código es una función llamada "spinWords" que toma una cadena como argumento
//  y separa cada palabra en un arreglo. Luego, recorre el arreglo original y verifica 
//  si cada palabra tiene más de 5 caracteres. Si es así, la invierte y la reemplaza en
//   un nuevo arreglo. Si no, agrega la palabra original al nuevo arreglo. Finalmente, 
//   devuelve el nuevo arreglo como una cadena uniendo cada elemento con un espacio.*/

// function spinWords(string) {
//   // Esta función toma una cadena como argumento y separa las palabras en un arreglo
//   let separar = string.split(" ");

//   // Se crea un nuevo arreglo vacío para almacenar las palabras invertidas
//   let reversa = [];

//   // Se recorre el arreglo original
//   for (let i = 0; i < separar.length; i++) {
//     // Se agrega cada palabra al nuevo arreglo
//     reversa.push(separar[i]);

//     // Si la palabra tiene más de 5 caracteres, se invierte
//     if (separar[i].length >= 5) {
//       let reverse = separar[i].split("").reverse().join("");
//       // Se reemplaza la palabra original en el nuevo arreglo con la invertida
//       reversa.splice(i, i, reverse);
//     } else {
//       // Si no tiene más de 5 caracteres, se mantiene la palabra original
//       reversa.splice(i, i, separar[i]);
//     }
//   }

//   // Verifica si el tamaño del nuevo arreglo es diferente al original
//   // Si es así, elimina el último elemento
//   if (reversa.length != separar.length) {
//     reversa.pop();
//   }

//   // Devuelve el nuevo arreglo como una cadena uniendo cada elemento con un espacio
//   return reversa.join(" ");
// }

// // Muestra en consola el resultado de la función con el argumento " one Welcome one "
// console.log(spinWords(" one Welcome one "));


// lade arriba fue mi solución//

//aquí otra forma

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
console.log(spinWords(" one Welcome one "));