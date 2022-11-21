// MÉTODO
module.exports = Array.prototype.merge = function (chave, chavesSoma) {
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
      let novoObj = { [chave]: itemOriginal[chave] };
      for (let j = 0; j < chavesSoma.length; j++) {
        const chaveSoma = chavesSoma[j];
        novoObj[chaveSoma] = itemOriginal[chaveSoma];
      }
      registro.push(novoObj);
    }
  }
  return registro;
};
