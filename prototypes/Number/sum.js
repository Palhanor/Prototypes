// Não funciona com limite infinito
Number.prototype.sum = function (lim, equation) {
  let soma = 0;
  for (let i = this; i <= lim; i++) {
    const final_equation = equation.replaceAll("n", i);
    soma += eval(final_equation);
  }
  return soma;
};
