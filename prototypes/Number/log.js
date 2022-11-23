Number.prototype.log = function (base) {
  let maior, menor, teste;
  base = base ? base : 2.718281828459045235360287;
  if (this == 1) return 0;
  else if (base == this) return 1;
  else if (base > this) {
    maior = 1;
    menor = 0;
    teste = menor + (maior - menor) / 2;
    while ((base ** teste).toFixed(10) != this.toFixed(10)) {
      const teste = menor + (maior - menor) / 2;
      if (base ** teste > this) maior = teste;
      else if (base ** teste < this) menor = teste;
      else break;
      teste = menor + (maior - menor) / 2;
    }
    return menor + (maior - menor) / 2;
  } else if (base < this) {
    maior = 1000;
    menor = 1;
    teste = menor + (maior - menor) / 2;
    while ((base ** teste).toFixed(10) != this.toFixed(10)) {
      if (base ** teste > this) maior = teste;
      else if (base ** teste < this) menor = teste;
      else break;
      teste = menor + (maior - menor) / 2;
    }
    return menor + (maior - menor) / 2;
  }
};
