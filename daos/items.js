const uuid = require('uuid');

const itemsModel = require('../models/items');

module.exports = {};

module.exports.getAll = () => {
  return itemsModel.items;
};

module.exports.getById = (itemId) => {
  // TODO: complete
  const object = itemsModel.items.find((item) => item.id === itemId.id);
  return object;
};

module.exports.deleteById = async (itemId) => {
  // TODO: complete
};

module.exports.updateById = async (itemId, newObj) => {
  // TODO: complete
};

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  itemsModel.items.push(newItem);
  return newItem;
};
