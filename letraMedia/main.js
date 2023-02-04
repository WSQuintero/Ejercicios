//https://www.codewars.com/kata/56747fd5cb988479af000028/javascript
/*You are going to be given a word. Your job is to return the middle
 character of the word. If the word's length is odd, return the middle character. 
 If the word's length is even, return the middle 2 characters.*/
function getMiddle(s) {
  // Se declara la variable getParOrImpar y se asigna el valor de la longitud de la cadena s
  let getParOrImpar = s.length;

  //Función que determina si la longitud de la cadena es par o impar
  function parOinpar() {
    let resultado;
    // Se verifica si la longitud de la cadena es par o impar
    getParOrImpar % 2 == 0 ? (resultado = "par") : (resultado = "impar");
    // Se retorna el resultado
    return resultado;
  }
  // Se utiliza un operador ternario para determinar si la longitud de la cadena es par o impar
  // Si es par, se retorna la concatenación de los caracteres del medio
  // Si es impar, se retorna solo el caracter del medio
  return parOinpar() == "par"
    ? `${s[Math.floor(s.length / 2 - 1)]}${s[Math.floor(s.length / 2)]}`
    : s[Math.floor(s.length / 2)];
}

getMiddle();
