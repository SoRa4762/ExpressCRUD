const ItemModel = require("../models/itemModel");

const CreateItem = async (itemData) => {
  //   return await ItemModel.create(itemData);
  const newItemModel = new ItemModel(itemData);
  const savedItem = await newItemModel.save();
  return savedItem;
};

const GetItems = async () => {
  return await ItemModel.find();
};

const GetItemById = async (id) => {
  return await ItemModel.findById(id);
};

const UpdateItem = async (id, newItemData) => {
  return await ItemModel.findByIdAndUpdate(id, newItemData, {
    new: true,
  });
};

const DeleteItem = async (id) => {
  return await ItemModel.findByIdAndDelete(id);
};

module.exports = { CreateItem, GetItems, GetItemById, UpdateItem, DeleteItem };
