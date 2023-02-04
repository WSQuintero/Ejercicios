function createPhoneNumber(numbers) {
  let arrayFinal = numbers.slice();
  arrayFinal.splice(0, 0, "(");
  arrayFinal.splice(4, 0, ")");
  arrayFinal.splice(5, 0, " ");
  arrayFinal.splice(9, 0, "-");
  return arrayFinal.join("");
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
