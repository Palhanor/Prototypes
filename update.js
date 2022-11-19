// MÉTODO
Array.prototype.update = function (index, value) {
  let array = [...this];
  const newArray = [
    ...array.slice(0, index),
    value,
    ...array.slice(index + 1, array.length),
  ];
  return newArray;
};

// IMPLEMENTAÇÃO
const arrayOriginal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // array original
const novoArray = arrayOriginal.update(6, 12); // Inserindo o valor 12 na posição 6
console.log("Original: ", arrayOriginal);
console.log("Modificado: ", novoArray);

console.log("==================================")

const arrayObjs = [
  { nome: "Lucas Palhano", idade: 26 },
  { nome: "Bruno Palhano", idade: 23 },
]; // Array de objetos original
const posicao = arrayObjs.findIndex((obj) => obj.nome == "Bruno Palhano"); // Pegando a posição do objeto
const novoArrayObjs = arrayObjs.update(posicao, {
  ...arrayObjs[posicao],
  idade: 24,
}); // Inserindo o mesmo objeto com um valor diferente na posição do mesmo objeto
console.log("Original: ", arrayObjs);
console.log("Modificado: ", novoArrayObjs);
