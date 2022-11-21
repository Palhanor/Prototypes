const prompt = require("prompt-sync")({ sigint: true });
require("./prototypes");

const texto = `-----------------
| 1 - Insert    |
| 2 - Update    |
| 3 - Remove    |
| 4 - Erease    |
| 5 - EreaseAll |
| 6 - Special   |
| 7 - OrderUp   |
| 8 - OrderDown |
| 9 - Merge     |
-----------------`;

let controle = true;
while (controle) {
  console.log(texto);
  const valor = prompt(
    "Entre com o valor do Prototype a ser testado (0 para SAIR): "
  );
  switch (valor) {
    case "1":
      runInsert();
      break;
    case "2":
      runUpdate();
      break;
    case "3":
      runRemove();
      break;
    case "4":
      runErease();
      break;
    case "5":
      runEreaseAll();
      break;
    case "6":
      runSpecial();
      break;
    case "7":
      runOrderUp();
      break;
    case "8":
      runOrderDown();
      break;
    case "9":
      runMerge();
      break;
    default:
      controle = false;
      break;
  }
}

// INSERT
function runInsert() {
  console.log("======= INSERT =======");
  const arrInsert = ["HTML", "CSS", "React"];
  const newArrInsert = arrInsert.insert(2, "JavaScript");
  console.log("Array original: ", arrInsert);
  console.log("Novo array: ", newArrInsert);
  const arrInsert2 = [0, 1, 2, 7, 8, 9];
  const newArrInsert2 = arrInsert2.insert(3, [3, 4, 5, 6]);
  console.log("Array original: ", arrInsert2);
  console.log("Novo array: ", newArrInsert2);
}

// UPDATE
function runUpdate() {
  console.log("======= UPDATE =======");
  const arrUpdate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // array original
  const newArrUpdate = arrUpdate.update(6, () => 12); // Inserindo o valor 12 na posição 6
  console.log("Original: ", arrUpdate);
  console.log("Modificado: ", newArrUpdate);
  const arrUpdate2 = [
    { nome: "Lucas Palhano", idade: 26 },
    { nome: "Bruno Palhano", idade: 23 },
    { nome: "Isadora Palhano", idade: 21 },
  ]; // Array de objetos original
  const posicao = arrUpdate2.findIndex((obj) => obj.nome == "Bruno Palhano"); // Pegando a posição do objeto
  const newArrUpdate2 = arrUpdate2.update(posicao, (val) => ({
    ...val,
    idade: 24,
  })); // Inserindo o mesmo objeto com um valor diferente na posição do mesmo objeto
  console.log("Original: ", arrUpdate2);
  console.log("Modificado: ", newArrUpdate2);
}

// REMOVE
function runRemove() {
  console.log("======= REMOVE =======");
  const arrRemove = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const newArrRemove = arrRemove.remove(3);
  console.log("Array original: ", arrRemove);
  console.log("Novo array: ", newArrRemove);
}

// EREASE
function runErease() {
  console.log("======= EREASE =======");
  const arrErease = [9, 8, 7, 6, 5, 4, 6, 3, 3, 2, 1, 0];
  const newArrErease = arrErease.erease(6);
  console.log("Array original: ", arrErease);
  console.log("Novo array: ", newArrErease);
}

// EREASEALL
function runEreaseAll() {
  console.log("======= EREASEALL =======");
  const arrEreaseAll = [3, 9, 8, 3, 7, 3, 6, 5, 4, 3, 3, 2, 1, 0];
  console.log("Array original: ", arrEreaseAll);
  const newArrEreaseAll = arrEreaseAll.ereaseAll(3);
  console.log("Novo array: ", newArrEreaseAll);
}

// SPECIAL
function runSpecial() {
  console.log("======= SPECIAL =======");
  const arrSpecial = [
    { nome: "Lucas", idade: 25 },
    { nome: "Bruno", idade: 23 },
    { nome: "Joselito", idade: 25 },
  ];
  const newArrSpecial = arrSpecial.special((valor) => valor.idade);
  console.log("Array original: ", arrSpecial);
  console.log("Novo array: ", newArrSpecial);
  const arrSpecial2 = [1, 2, 3, 2];
  const newArrSpecial2 = arrSpecial2.special();
  console.log("Array original: ", arrSpecial2);
  console.log("Novo array: ", newArrSpecial2);
  const arrSpecial3 = ["Vagner", "Lucas", "Sandra", "Maria", "Lucas"];
  const newArrSpecial3 = arrSpecial3.special();
  console.log("Array original: ", arrSpecial3);
  console.log("Novo array: ", newArrSpecial3);
}

// ORDERUP
function runOrderUp() {
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
}

// ORDERDOWN
function runOrderDown() {
  const arrayNumericoOriginal = [
    6.9, 4.2, 0, 11, 6, 4, 8, 10, 2, 6, 4, 22, 20, 9, 3, 9, 50, 66, 1.3,
  ];
  console.log(
    "Array numerico original: ",
    arrayNumericoOriginal,
    arrayNumericoOriginal.length
  );

  const novoArrayNumericoUp = arrayNumericoOriginal.orderDown();
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

  const novoArrayStringUp = arrayStringOriginal.orderDown();
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
  const arrayMistoUp = arrayMistoOriginal.orderDown();
  console.log("Novo array string crescente: ", arrayMistoUp);

  const arrayObjetoOriginal = [
    { nome: "Lucas", idade: 26 },
    { nome: "Bruno", idade: 23 },
    { nome: "Isadora", idade: 21 },
    { nome: "Ademar", idade: 46 },
  ];
  console.log("Array numerico original: ", arrayObjetoOriginal);
  const arrayObjetoUp = arrayObjetoOriginal.orderDown((valor) => valor.nome);
  console.log("Novo array string crescente: ", arrayObjetoUp);
}

function runMerge() {
  const array = [
    { produto: "Notebook", preco: 5799, quantidade: 1 },
    { produto: "iPhone", preco: 3999, quantidade: 2 },
    { produto: "Monitor", preco: 1499, quantidade: 2 },
    { produto: "iPhone", preco: 3999, quantidade: 1 },
  ];
  const novoArray = array.merge("produto", ["quantidade"]);
  console.log(array);
  console.log(novoArray)
}