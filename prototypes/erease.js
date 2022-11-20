/**************************************************************
Retorna um novo array contendo a subtraçaõ do valor ue se encontrava na posição indicada
Recebe apenas o valor referente à posição onde deverá ser realizada a remoção do valor
**************************************************************/

// MÉTODO
module.exports = Array.prototype.erease = function (value) {
  let array = [...this];
  const indiceValue = array.indexOf(value);
  if (indiceValue !== -1) {
    array = [
      ...array.slice(0, indiceValue),
      ...array.slice(indiceValue + 1, array.length),
    ];
  }
  return array;
};
