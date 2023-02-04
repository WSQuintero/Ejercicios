// Declaración de la función "sumWithClosure"
// que toma un parámetro "firstNum"
function sumWithClosure(firstNum) {
  // y retorna una función anónima "secondNumber"
  // que tiene acceso al valor del parámetro "firstNum"
  return function secondNumber(secondNum) {
    // si el segundo parámetro "secondNum" no existe (es "undefined")
    if(!secondNum){
      // retorna el primer parámetro "firstNum"
      return firstNum;
    }else{
      // de lo contrario, retorna la suma del primer parámetro "firstNum" y el segundo parámetro "secondNum"
      return firstNum + secondNum; 

    }
  }
}

//invocamos la función sumWithClosure y pasamos el primer parametro 2
// y luego inmediatamente llamamos a la función retornada pasandole el segundo parametro 3
// 2 y 3 son sumados y el resultado es 5
sumWithClosure(2)(3);