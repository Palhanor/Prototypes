Number.prototype.func = function (equation) {
  const valor_x = this;
  const final_equation = equation.replaceAll("x", valor_x);
  return eval(final_equation);
};