/**************************************************************
Retorna um novo array contendo apenas os valores únicos de dentro do array
Recebe um callback contendo a função que indica o valor do objeto que deve ser comparado
Caso seja um array simples basta usar o método sem qualquer parâmetro
**************************************************************/

// MÉTODO
module.exports = Array.prototype.special = function (callback) {
  const novoArray = [];
  if (callback) {
    for (let i = 0; i < this.length; i++) {
      const elemento = callback(this[i]);
      const filtraValor = this.filter((valor) => callback(valor) === elemento);
      if (filtraValor.length === 1) novoArray.push(this[i]);
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      const filtraValor = this.filter((valor) => valor === this[i]);
      if (filtraValor.length === 1) novoArray.push(this[i]);
    }
  }
  return novoArray;
};