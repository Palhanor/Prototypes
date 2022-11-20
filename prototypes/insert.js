/**************************************************************
Retorna um novo array com um novo valor adicionado na posição indicada
Recebe um valor a ser adicionado na lista, e também uma posição onde deverá ser alocado
Caso receba um array irá usa um spread operator para quebrar o array em seus valores
**************************************************************/

// MÉTODO
module.exports = Array.prototype.insert = function (index, value) {
  const array = [...this];
  const novoArray = [
    ...array.slice(0, index),
    value,
    ...array.slice(index, array.length),
  ];
  return novoArray;
};
