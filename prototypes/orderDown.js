// Evitar problema com letras minusculas e mausculas
// Ordenar boolean também?

// MÉTODO
module.exports = Array.prototype.orderDown = function (callback) {
  let array = [...this];
  let arrNumber = [];
  let arrString = [];
  let arrObjectNumber = [];
  let arrObjectString = [];
  let arrObjectStringControl = [];
  let arrObjectStringObjectControl = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") arrNumber.push(array[i]);
    else if (typeof array[i] == "string") arrString.push(array[i]);
    else if (typeof array[i] == "object") {
      if (typeof callback(array[i]) == "number") arrObjectNumber.push(array[i]);
      else if (typeof callback(array[i]) == "string") {
        arrObjectStringControl.push(callback(array[i]));
        arrObjectStringObjectControl.push(array[i]);
      }
    }
  }

  // ORDENA NÚMEROS
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < arrNumber[i + 1]) {
      arrNumber.push(arrNumber[i]);
      arrNumber = [
        ...arrNumber.slice(0, i),
        ...arrNumber.slice(i + 1, arrNumber.length),
      ];
      i = -1;
    }
  }

  // ORDENA STRINGS
  arrString = arrString.sort().reverse();

  // ORDENA NÚMEROS DENTRO DE OBJETOS
  for (let i = 0; i < arrObjectNumber.length - 1; i++) {
    if (callback(arrObjectNumber[i]) < callback(arrObjectNumber[i + 1])) {
      arrObjectNumber.push(arrObjectNumber[i]);
      arrObjectNumber = [
        ...arrObjectNumber.slice(0, i),
        ...arrObjectNumber.slice(i + 1, arrObjectNumber.length),
      ];
      i = -1;
    }
  }

  // ORDENA STRINGS DENTRO DE OBJETOS
  arrObjectStringControl = arrObjectStringControl.sort().reverse();
  console.log(arrObjectStringControl);
  console.log(arrObjectStringObjectControl);
  for (let i = 0; i < arrObjectStringControl.length; i++) {
    var posicao = arrObjectStringObjectControl.findIndex(
      (item) => callback(item) == arrObjectStringControl[i]
    );
    arrObjectString.push(arrObjectStringObjectControl[posicao]);
  }

  return [...arrObjectString, ...arrObjectNumber, ...arrString, ...arrNumber];
};
