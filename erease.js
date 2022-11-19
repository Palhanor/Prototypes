/**************************************************************
Retorna um novo array contendo a subtraçaõ do valor ue se encontrava na posição indicada
Recebe apenas o valor referente à posição onde deverá ser realizada a remoção do valor
**************************************************************/

// MÉTODO
Array.prototype.remove = function (value) {
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

Array.prototype.update = function (index, value) {
  let array = [...this];
  const newArray = [
    ...array.slice(0, index),
    value,
    ...array.slice(index + 2, array.length),
  ];
  return newArray;
};

// IMPLEMENTAÇÃO
const arrayOriginal = [9, 8, 7, 6, 5, 4, 3, 3, 2, 1, 0];
console.log("Array original: ", arrayOriginal);
const novoArray = arrayOriginal.remove(6);
console.log("Novo array: ", novoArray);

const arrayOriginal2 = [9, 8, 7, 6, 5, 4, 3, 3, 2, 1, 0];
console.log("Array original: ", arrayOriginal);
const novoArray2 = arrayOriginal.update(6, 1000);
console.log("Novo array: ", novoArray);
