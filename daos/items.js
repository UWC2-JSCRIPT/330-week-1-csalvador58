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
  const index = itemsModel.items.findIndex((item) => item.id === itemId.id);
  const deletedItem = itemsModel.items.splice(index, 1);
  return deletedItem;
};

module.exports.updateById = async (itemId, newObj) => {
  // TODO: complete
  const index = itemsModel.items.findIndex((item) => item.id === itemId.id);
  if (index < 0) {
    return itemId;
  }
  itemsModel.items[index] = { ...newObj, ...itemId };
  return itemsModel.items[index];
};

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  itemsModel.items.push(newItem);
  return newItem;
};
