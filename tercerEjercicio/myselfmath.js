const MyselfMath = {};

MyselfMath.ordenarListaNumeros=function ordenarListaNumeros (array){
    /* el metodo .sort() nos permite ordenar los elementos de un array, 
  si es un string lo ordena en orden alfabetico de acuerdo a unicode, 
  si es número se requiere comparar los dos parametros establecidos de 
  a y b restandolos para que así devuelva el orden correcto,
   array.sort(function(a, b){return a - b}); */
  const ordenarLista = array.sort(ordenar = (a,b)=>a-b)

return ordenarLista;
};
MyselfMath.ordenarListaAlfabeto=function ordenarListaAlfabeto (array){
  /* el metodo .sort() nos permite ordenar los elementos de un array, 
si es un string lo ordena en orden alfabetico de acuerdo a unicode, 
si es número se requiere comparar los dos parametros establecidos de 
a y b restandolos para que así devuelva el orden correcto,
 array.sort(function(a, b){return a - b}); */
const ordenarLista = array.sort();

return ordenarLista;
};
MyselfMath.calcularModa= function calcularModa (array){
  const ordenarLista = MyselfMath.ordenarListaNumeros(array);
  const arrayFInal = [];
  const repeticion =[];
  let   resultado ;

ordenarLista.forEach((objeto,index,array)=>{       
  if (objeto == array[index+1] && !arrayFInal.includes(objeto)){
    arrayFInal.push(objeto);
    resultado = array.filter((a)=>{
    return a==objeto;
        })
    repeticion.push(resultado.length);    
        }
        })

for(let i= 0; i < repeticion.length; i++ ){
  console.log("El argumento "+arrayFInal[i],"se repite "+repeticion[i]+" veces")
          };        
    const vecesMayor= Math.max(...repeticion);
    const indexVecesMayor = repeticion.indexOf(vecesMayor);
    console.log("La moda del Array indicado es " + arrayFInal[indexVecesMayor]) 
};
MyselfMath.parOinpar= parOinpar = (array) => { 
   MyselfMath.ordenarListaNumeros(array);

  let cantidadDeArray = array.length;
  let redondear = Math.round((array.length / 2)) ;
  if (cantidadDeArray/redondear == 2 ){
    return "Es par"
  }else{
      return "Es impar"
    }
};
MyselfMath.calcularMediana= function calcularMediana (array){ 
  MyselfMath.ordenarListaNumeros(array);
  if (MyselfMath.parOinpar(array)== "Es par"){
    // console.log("Es par");
    const indexMediana = Math.floor(array.length /2) ;
    const mediana1 = array[indexMediana];
    const mediana2 = array[indexMediana -1] ;
    const promedioMedianaFInal = (mediana1 + mediana2) / 2;
    return "la mediana del array es " + promedioMedianaFInal;
  }else{
      const indexMediana = Math.floor(array.length /2) ;
      const mediana = array[indexMediana];
      // console.log("Es par");
      return "la mediana del array es " + mediana;
    }
};
MyselfMath.calcularPromedio=function calcularPromedio (array){
  const suma = array.reduce(funcionReduce);
   function funcionReduce (valorAcumulado, nuevoValor){
    return valorAcumulado + nuevoValor;
    };
      let promedio= suma / array.length;
  return promedio;
};