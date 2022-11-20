// MÉTODO
module.exports = Array.prototype.update = function (index, value) {
  let array = [...this];
  const newArray = [
    ...array.slice(0, index),
    value,
    ...array.slice(index + 1, array.length),
  ];
  return newArray;
};
