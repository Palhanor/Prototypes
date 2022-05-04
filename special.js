/**************************************************************
Retorna um novo array contendo apenas os valores únicos de dentro do array
Recebe um callback contendo a função que indica o valor do objeto que deve ser comparado
Caso seja um array simples basta usar o método sem qualquer parâmetro
**************************************************************/

// MÉTODO
Array.prototype.special = function (callback) {
  const novoArray = [];
  if (callback) {
    for (let i = 0; i < this.length; i++) {
      const elemento = callback(this[i]);
      const filtraValor = this.filter((valor) => callback(valor) === elemento);
      if (filtraValor.length === 1) novoArray.push(this[i]);
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      const filtraValor = this.filter((valor) => valor === this[i]);
      if (filtraValor.length === 1) novoArray.push(this[i]);
    }
  }
  return novoArray;
};

// IMPLEMENTAÇÃO
const arrayOriginal = [
  {
    nome: "Lucas",
    idade: 25,
  },
  {
    nome: "Bruno",
    idade: 23,
  },
  {
    nome: "Joselito",
    idade: 25,
  },
];
const novoArray = arrayOriginal.special(valor => valor.idade);
console.log("Array original: ", arrayOriginal);
console.log("Novo array: ", novoArray);

const arr = [1, 2, 3, 2]
const novoArr = arr.special();
console.log("Array original: ", arr);
console.log("Novo array: ", novoArr);

const x = ["Vagner", "Lucas", "Sandra", "Maria", "Lucas"]
const novoX = x.special();
console.log("Array original: ", x);
console.log("Novo array: ", novoX);