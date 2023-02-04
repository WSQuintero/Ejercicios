function count (string) {  
  // Se separa cada caracter de la cadena en un elemento de un arreglo
  let ordenar=string.split("");
  // Se crea un objeto vacio para almacenar los caracteres y sus cuentas
  let objetoFinal={};

  // Se recorre cada caracter del arreglo
  ordenar.forEach((letra)=> {
    // Se verifica si el caracter ya esta en el objetoFinal
    // Si no esta se inicializa en cero, si esta se incrementa en 1
    objetoFinal[letra]=(objetoFinal[letra]||0)+1;
  });
   // Se retorna el objeto con los caracteres y sus cuentas
   return objetoFinal;
};

console.log(count("hollaaalaa"));