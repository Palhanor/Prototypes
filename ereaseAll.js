/**************************************************************
Retorna um novo array contendo a subtraçaõ do valor ue se encontrava na posição indicada
Recebe apenas o valor referente à posição onde deverá ser realizada a remoção do valor
**************************************************************/

// MÉTODO
Array.prototype.remove = function (value) {
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
  
  // IMPLEMENTAÇÃO
  const arrayOriginal = [3, 9, 8, 3, 7, 3, 6, 5, 4, 3, 3, 2, 1, 0];
  console.log("Array original: ", arrayOriginal);
  const novoArray = arrayOriginal.remove(3);
  console.log("Novo array: ", novoArray);