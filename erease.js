/**************************************************************
Retorna um novo array contendo a subtraçaõ do valor ue se encontrava na posição indicada
Recebe apenas o valor referente à posição onde deverá ser realizada a remoção do valor
**************************************************************/

// MÉTODO
Array.prototype.erease = function (index) {
  const array = [...this];
  const novoArray = [
    ...array.slice(0, index),
    ...array.slice(index + 1, array.length),
  ];
  return novoArray;
};

// IMPLEMENTAÇÃO
const arrayOriginal = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log("Array original: ", arrayOriginal);
const novoArray = arrayOriginal.erease(3);
console.log("Novo array: ", novoArray);
