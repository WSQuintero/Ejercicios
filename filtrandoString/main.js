function domainName(url) {
  // Verifica si la url comienza con "w"
  if (url[0] == "w") {
    // Encuentra la posición del primer punto en la url
    const primerPunto = url.indexOf(".");
    // Elimina el texto antes del primer punto
    const retirandoPrimerPunto = url.substr(primerPunto + 1);
    // Encuentra la posición del segundo punto
    const puntoFinal = retirandoPrimerPunto.indexOf(".");
    // Extrae el nombre de dominio utilizando el segundo punto como límite
    const final = retirandoPrimerPunto.substr(0, puntoFinal);
    // Devuelve el nombre de dominio
    return final;
  } 
  // Verifica si la url comienza con "h"
  else if (url[0] == "h") {
    // Encuentra la posición de la barra "/"
    const tamañoSlash = url.indexOf("/") + 1;
    // Verifica si después de la barra "/" existe una "w"
    if (url[tamañoSlash + 1] !== "w") {
      // Si no existe una "w", extrae el nombre de dominio después de la barra "/"
      const final = url.substr(url.indexOf("/") + 2, url.indexOf(".") - tamañoSlash - 1);
      // Devuelve el nombre de dominio
      return final;
    } 
    // Si existe una "w", realiza los siguientes pasos
    else {
      // Extrae el texto "www"
      const www = url.substr(url.indexOf("/") + 2,url.indexOf(".") - tamañoSlash);
      // Reemplaza el texto "www" en la url
      const finalFinal = url.replace(www, "");
      // Extrae el nombre de dominio después de la barra "/" y reemplaza "www"
      const final = finalFinal.substr(finalFinal.indexOf("/") + 2,finalFinal.indexOf(".")-tamañoSlash-1);
      // Devuelve el nombre de dominio
      return final;
    }
  }
  // Si la url no comienza con "w" ni con "h"
  else{
    // Encuentra la posición del primer punto
    const primerPunto = url.indexOf(".");
    // Extrae el nombre de dominio hasta el primer punto
    const final = url.substr(0, primerPunto);
    // Devuelve el nombre de dominio
    return final;
  }
}


console.log(domainName("3y3qyljc9kkoxliz4ev01-w.jp/index.php"));



//la de arriba fue mi solución.

//aquí hay otra más elegante

function domainName(url){
	return  url.replace('http://', '')
					   .replace('https://', '')
					   .replace('www.', '')
  					 .split('.')[0];
}