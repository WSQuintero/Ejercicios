function encontrarPersona(personaBusqueda){
    return salarios.find(persona => persona.name==personaBusqueda);
};
function encontrarSalarios(persona){
  let empleado = encontrarPersona(persona);
  let salario =empleado.trabajos.map(cadaSalario=>cadaSalario.salario);
  let salarioOrdenado=MyselfMath.ordenarListaNumeros(salario);
  return salarioOrdenado;
}
function medianaPorPersona(persona){
      return MyselfMath.calcularMediana(encontrarSalarios(persona));    
};
function proyeccionSalario(persona){
  const salario =encontrarSalarios(persona);
  let porcentajeAumentoDeSalario = ((salario[salario.length-1] - salario[salario.length-2]) / salario[salario.length-1]) * 100;
  const aumentoFinalSalario=(porcentajeAumentoDeSalario*salario[salario.length-1]) /100;
  const salarioFinal=salario[salario.length-1]+aumentoFinalSalario;
 
  return "Tu salario para el siguiente año debería ser "+ salarioFinal+" dolares,es decir,un aumento de "+aumentoFinalSalario+" dolares";
} 
function analisisPorEmpresa(){
const empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }
//para entrar en 
    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

return empresas;

       
     }
function calcularMedianaPorAño(nombreEmpresa,año){
  let empresa=analisisPorEmpresa();
    let años= empresa[nombreEmpresa][año];
    return MyselfMath.calcularMediana(años);  
}
      
      
      
   
