/**************************************************************
Retorna um novo array contendo a subtraçaõ do valor ue se encontrava na posição indicada
Recebe apenas o valor referente à posição onde deverá ser realizada a remoção do valor
**************************************************************/

// MÉTODO
module.exports = Array.prototype.remove = function (index) {
  const array = [...this];
  const novoArray = [
    ...array.slice(0, index),
    ...array.slice(index + 1, array.length),
  ];
  return novoArray;
};
