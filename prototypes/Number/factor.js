Number.prototype.factor = function () {
  soma = 1;
  for (let i = this; i >= 1; i--) soma *= i;
  return soma;
};