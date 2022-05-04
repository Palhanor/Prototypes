/**************************************************************
Retorna um novo array reordenado do valor mais baixo para o mais alto
Não recebe qualquer valor, sendo chamada em um array numérico
Não é possível realizar uma ordenação entre diferentes tipos de dados no array
TODO: É preciso adicinar também um sistema para strings
**************************************************************/

// MÉTODO
// Adicionar tipo string
Array.prototype.orderUp = function () {
  let array = [...this];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
        array.push(array[i])
        array = [
            ...array.slice(0, i),
            ...array.slice(i + 1, array.length),
          ];
        i = 0
    }
  }
  return array;
};

// IMPLEMENTAÇÃO
const arrayOriginal = [9, 0, 6, 4, 8, 2, 6, 4, 9, 3, 9];
console.log("Array original: ", arrayOriginal);
const novoArray = arrayOriginal.orderUp();
console.log("Novo array: ", novoArray);
