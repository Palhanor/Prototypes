/**************************************************************
Retorna um novo array com um novo valor adicionado na posição indicada
Recebe um valor a ser adicionado na lista, e também uma posição onde deverá ser alocado
Caso receba um array irá usa um spread operator para quebrar o array em seus valores
**************************************************************/

// Posso remover o sistema de quebrar o array, pois pode ser importante adicionar um array ou objeto inteiro
// MÉTODO
Array.prototype.insert = function (index, value) {
    const array = [...this];
    let novoArray = []
    if (typeof value === 'object') {
        novoArray = [
            ...array.slice(0, index),
            ...value,
            ...array.slice(index, array.length),
          ];
    } else {
        novoArray = [
            ...array.slice(0, index),
            value,
            ...array.slice(index, array.length),
          ];
    }
    return novoArray;
  };
  
  // IMPLEMENTAÇÃO
  const arrayOriginal = ["HTML", "CSS", "React"];
  const novoArray = arrayOriginal.insert(2, "JavaScript");
  console.log("Array original: ", arrayOriginal);
  console.log("Novo array: ", novoArray);

  const teste = [0, 1, 2, 7, 8, 9];
  const novoTeste = teste.insert(3, [3, 4, 5, 6]);
  console.log("Array original: ", teste);
  console.log("Novo array: ", novoTeste);