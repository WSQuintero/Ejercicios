// "https://www.codewars.com/kata/54e6533c92449cc251001667/javascript"

let uniqueInOrder = function (iterable) {
  //Se verifica si el parametro recibido es una cadena
  if (typeof iterable == "string") {
    // Si es una cadena se separa en un arreglo
    let separar = iterable.split("");
    console.log(separar);
    // Se filtran los elementos unicos del arreglo
    let unicos = separar.filter((a, i) => {
      return a != separar[i + 1];
    });
    return unicos;
  } else {
    // Si el parametro recibido no es una cadena se filtran los elementos unicos del arreglo
    let unicos = iterable.filter((a, i) => {
      return a != iterable[i + 1];
    });
    return unicos;
  }
};
