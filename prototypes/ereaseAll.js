/**************************************************************
Retorna um novo array contendo a subtraçaõ do valor ue se encontrava na posição indicada
Recebe apenas o valor referente à posição onde deverá ser realizada a remoção do valor
**************************************************************/

// MÉTODO
module.exports = Array.prototype.ereaseAll = function (value) {
  let array = [...this];
  while (array.indexOf(value) !== -1) {
    const indiceValue = array.indexOf(value);
    array = [
      ...array.slice(0, indiceValue),
      ...array.slice(indiceValue + 1, array.length),
    ];
  }
  return array;
};
