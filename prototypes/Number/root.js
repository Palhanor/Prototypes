Number.prototype.root = function (num) {
  num = num ? num : 2;
  return this ** (1 / num);
};
