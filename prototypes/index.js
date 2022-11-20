const insert = require("./insert");
const update = require("./update");
const remove = require("./remove");
const erease = require("./erease");
const ereaseAll = require("./ereaseAll");
const special = require("./special");
const orderUp = require("./orderUp");
const orderDown = require("./orderDown");

exports.prototypes = {
  insert,
  update,
  remove,
  erease,
  ereaseAll,
  special,
  orderUp,
  orderDown,
};
