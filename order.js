/**************************************************************
Retorna um novo array reordenado do valor mais alto para o mais baixo
Recebe o valor 1 para ordenar de forma crescente e -1 para ordenar de forma decrescente
Consgue realizar o ordenamento tanto de tipo Number quanto String
Não é possível realizar uma ordenação entre diferentes tipos de dados no array
**************************************************************/

// MÉTODO
// Adicionar tipo string
Array.prototype.order = function (direction) {
    let array = [...this];
    if (direction === 1) {
      if (typeof array[0] === 'number') {
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
      } else if (typeof array[0] === 'string') {
        array = array.sort();
      }
    } else if (direction === -1) {
      if (typeof array[0] === 'number') {
        for (let i = 0; i < array.length; i++) {
          if (array[i] < array[i+1]) {
              array.push(array[i])
              array = [
                  ...array.slice(0, i),
                  ...array.slice(i + 1, array.length),
                ];
              i = 0
          }
        }
      } else if (typeof array[0] === 'string') {
        array = array.sort().reverse()
      }
    }
    return array;
  };
  
  // IMPLEMENTAÇÃO
  const arrayNumericoOriginal = [9, 0, 6, 4, 8, 2, 6, 4, 9, 3, 9];
  console.log("Array numerico original: ", arrayNumericoOriginal);

  const novoArrayNumericoUp = arrayNumericoOriginal.order(1);
  console.log("Novo array numerico crescente: ", novoArrayNumericoUp);
  const novoArrayNumericoDown = arrayNumericoOriginal.order(-1);
  console.log("Novo array numerico decrescente: ", novoArrayNumericoDown);

  const arrayStringOriginal = ["casa", "flor", "zebra", "amazon", "react", "leão marinho"]
  console.log("Array numerico original: ", arrayStringOriginal);

  const novoArrayStringUp = arrayStringOriginal.order(1);
  console.log("Novo array string crescente: ", novoArrayStringUp);
  const novoArrayStringDown = arrayStringOriginal.order(-1);
  console.log("Novo array string crescente: ", novoArrayStringDown);