function ramdomNum (num){
  let ramdom=[];
  for(let i=0;i<num;i++){
    let num=Math.random()*10;
    ramdom.push(Math.floor(num));
  }
  return ramdom;
}

console.log(ramdomNum(10));

//esta funcion crea un array con la cantidad de números que se introduzca en el calor de la funcion
//es decir si se establece 4; se generará un array con 4 números aleatorios.