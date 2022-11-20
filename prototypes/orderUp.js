// Evitar problema com letras minusculas e mausculas
// Implementar ordenamento de string como valor de objeto
// E como ordenar se o valor passado de um objeto for outro objeto?

// MÉTODO
Array.prototype.orderUp = function (callback) {
  let array = [...this];
  let arrNumber = [];
  let arrString = [];
  let arrObjectNumber = [];
  // let arrObjectString = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") arrNumber.push(array[i]);
    else if (typeof array[i] == "string") arrString.push(array[i]);
    else if (typeof array[i] == "object") {
      if (typeof callback(array[i]) == "number") arrObjectNumber.push(array[i]);
      else
        throw Error("Ainda não há suporte para strings como valor de objetos");
    }
  }

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > arrNumber[i + 1]) {
      arrNumber.push(arrNumber[i]);
      arrNumber = [
        ...arrNumber.slice(0, i),
        ...arrNumber.slice(i + 1, arrNumber.length),
      ];
      i = -1;
    }
  }

  arrString = arrString.sort();

  for (let i = 0; i < arrObjectNumber.length - 1; i++) {
    if (callback(arrObjectNumber[i]) > callback(arrObjectNumber[i + 1])) {
      arrObjectNumber.push(arrObjectNumber[i]);
      arrObjectNumber = [
        ...arrObjectNumber.slice(0, i),
        ...arrObjectNumber.slice(i + 1, arrObjectNumber.length),
      ];
      i = -1;
    }
  }

  // Fazer ordenar strings do objeto

  return [
    ...arrNumber,
    ...arrString,
    ...arrObjectNumber,
    // ...arrObjectString
  ];
};

// IMPLEMENTAÇÃO
const arrayNumericoOriginal = [
  6.9, 4.2, 0, 11, 6, 4, 8, 10, 2, 6, 4, 22, 20, 9, 3, 9, 50, 66, 1.3,
];
console.log(
  "Array numerico original: ",
  arrayNumericoOriginal,
  arrayNumericoOriginal.length
);

const novoArrayNumericoUp = arrayNumericoOriginal.orderUp();
console.log(
  "Novo array numerico crescente: ",
  novoArrayNumericoUp,
  novoArrayNumericoUp.length
);

const arrayStringOriginal = [
  "casa",
  "flor",
  "zebra",
  "amazon",
  "react",
  "leão marinho",
];
console.log("Array numerico original: ", arrayStringOriginal);

const novoArrayStringUp = arrayStringOriginal.orderUp();
console.log("Novo array string crescente: ", novoArrayStringUp);

const arrayMistoOriginal = [
  "pepita",
  4.6,
  7,
  "vaca leiteira",
  66.6,
  "dinossauro",
  "a lenda do tesouro perdido",
  12,
];
console.log("Array numerico original: ", arrayMistoOriginal);
const arrayMistoUp = arrayMistoOriginal.orderUp();
console.log("Novo array string crescente: ", arrayMistoUp);

const arrayObjetoOriginal = [
  { nome: "Lucas", nascimento: { ano: 1996, mes: 05 } },
  { nome: "Bruno", nascimento: { ano: 1999, mes: 04 } },
  { nome: "Isadora", nascimento: { ano: 2001, mes: 08 } },
  { nome: "Ademar", nascimento: { ano: 1976, mes: 12 } },
];
console.log("Array numerico original: ", arrayObjetoOriginal);
const arrayObjetoUp = arrayObjetoOriginal.orderUp(
  (valor) => valor.nascimento.ano
);
console.log("Novo array string crescente: ", arrayObjetoUp);
