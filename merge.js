// MÉTODO
Array.prototype.merge = function (chave, chavesSoma) {
  let array = [...this];
  let registro = [];
  for (let i = 0; i < array.length; i++) {
    let itemOriginal = array[i];
    const index = registro.findIndex(
      (val) => val[chave] == itemOriginal[chave]
    );
    if (index !== -1) {
      for (let j = 0; j < chavesSoma.length; j++) {
        let itemSalvo = registro[index];
        const chaveSoma = chavesSoma[j];
        registro[index] = {
          ...registro[index],
          [chaveSoma]: itemSalvo[chaveSoma] + itemOriginal[chaveSoma],
        };
      }
    } else {
      registro.push(itemOriginal);
    }
  }
  return registro;
};

const array = [
  { nome: "Lucas", idade: 26, total: 5 },
  { nome: "Bruno", idade: 23, total: 2 },
  { nome: "Lucas", idade: 26, total: 7 },
  { nome: "Isadora", idade: 21, total: 8 },
];
const novoArray = array.merge("nome", ["total"]);
console.log(array);
console.log(novoArray)
