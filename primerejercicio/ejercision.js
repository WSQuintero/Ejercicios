function  trianguloEscaleno(lado1, lado2, lado3) {
  let semiPerimetro;

  if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2) {

    console.log(false);

  } else {
    let semiPerimetro = (lado1 + lado2 + lado3) / 2;
    const formula = ((semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3) * semiPerimetro);
    const raizCuadrada = Math.sqrt(formula);
    const altura = Math.floor(2 / lado1 * raizCuadrada);

    console.log(altura);
  }

}


trianguloEscaleno(16, 8, 10);
trianguloEscaleno(6, 6, 6);