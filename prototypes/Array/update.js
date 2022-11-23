// MÉTODO
module.exports = Array.prototype.update = function (index, callback) {
  let array = [...this];
  const value = callback(array[index]);
  const newArray = [
    ...array.slice(0, index),
    value,
    ...array.slice(index + 1, array.length),
  ];
  return newArray;
};
