function createPetList() {
  let list=[];
    function listPet(pet){
      if(pet){
        list.push(pet);
        return list;
      }else{
        return list;
      }  
    }
    
    return listPet;
} 

const myPetList = createPetList();


myPetList("michi");
myPetList("michoi");

/* Una closure es una función que tiene acceso a las variables de su entorno de ejecución original, incluso después de que la función ha regresado. En el código anterior, la función "createPetList()" crea un entorno de ejecución en el que se define la variable "list". Luego, la función "createPetList()" retorna otra función "listPet()".

La función "listPet()" es una closure porque tiene acceso a la variable "list" del entorno de ejecución de "createPetList()", incluso después de que "createPetList()" ha regresado. Esto significa que "listPet()" puede modificar el valor de "list" a pesar de que "createPetList()" ya ha terminado de ejecutarse.

De esta manera, cada vez que se llama a "myPetList()", el valor de "list" es accesible y modificable dentro de "listPet()", y se retorna la lista actualizada.

En resumen, Closure es una característica de javascript que permite a una función acceder y modificar las variables de su entorno de ejecución original, incluso después de que la función ha regresado.*/