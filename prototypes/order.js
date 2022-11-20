/**************************************************************
Retorna um novo array reordenado do valor mais alto para o mais baixo
Recebe o valor 1 para ordenar de forma crescente e -1 para ordenar de forma decrescente
Consgue realizar o ordenamento tanto de tipo Number quanto String
Não é possível realizar uma ordenação entre diferentes tipos de dados no array
**************************************************************/
// TODO: Existe diferença entre letra minúscula e maúscula dentro do sistema de ordenamento, e é necessário impedir isso.
// TODO: Permitir que o usuário ordene objeto através de um callback opcional que indica o dado do objeto a ser considerado.
// TODO: Fazer uma verificação em todo o array, e não só no primeiro valor. Ou então disparar um erro quando chegar em um valor de tipo indevido.

// MÉTODO
Array.prototype.order = function (direction) {
  let array = [...this];
  if (direction === 1 && typeof array[0] === "number") {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        array.push(array[i]);
        array = [...array.slice(0, i), ...array.slice(i + 1, array.length)];
        i = -1;
      }
    }
  } else if (direction === -1 && typeof array[0] === "number") {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        array.push(array[i]);
        array = [...array.slice(0, i), ...array.slice(i + 1, array.length)];
        i = -1;
      }
    }
  } else if (direction === 1 && typeof array[0] === "string") {
    array = array.sort();
  } else if (direction === -1 && typeof array[0] === "string") {
    array = array.sort().reverse();
  } else {
    if (direction !== 1 || direction !== -1)
      throw new Error(
        "É necessário informar o sentido do ordenamento através dos valores 1 (crescente) ou -1 (decrescente)"
      );
    else if (typeof array[0] !== "number" || typeof array[0] !== "string")
      throw new Error(
        "O array é composto por tipos não suportados, os quais são atualmente Number e String"
      );
  }
  return array;
};

// IMPLEMENTAÇÃO
const arrayNumericoOriginal = [
  6.9, 4.2, 0, 11, 6, 4, 8, 10, 2, 6, 4, 22, 20, 9, 3, 9, 50, 66, 1.3
];
console.log("Array numerico original: ", arrayNumericoOriginal, arrayNumericoOriginal.length);

const novoArrayNumericoUp = arrayNumericoOriginal.order(1);
console.log("Novo array numerico crescente: ", novoArrayNumericoUp, novoArrayNumericoUp.length);
const novoArrayNumericoDown = arrayNumericoOriginal.order(-1);
console.log("Novo array numerico decrescente: ", novoArrayNumericoDown, novoArrayNumericoDown.length);

// const arrayStringOriginal = [
//   "casa",
//   "flor",
//   "zebra",
//   "amazon",
//   "react",
//   "leão marinho",
// ];
// console.log("Array numerico original: ", arrayStringOriginal);

// const novoArrayStringUp = arrayStringOriginal.order(1);
// console.log("Novo array string crescente: ", novoArrayStringUp);
// const novoArrayStringDown = arrayStringOriginal.order(-1);
// console.log("Novo array string crescente: ", novoArrayStringDown);
