const ItemService = require("../services/itemService");
const CommentServices = require("../services/commentService");

const CreateItem = async (req, res) => {
  try {
    const createItem = await ItemService.CreateItem(req.body);
    res.status(201).json(createItem);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const GetItems = async (req, res) => {
  try {
    const getItems = await ItemService.GetItems();
    res.status(200).json(getItems);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const GetItemById = async (req, res) => {
  try {
    const getItemById = await ItemService.GetItemById(req.params.id);
    const getCommentsOfItem = await CommentServices.getCommentsOfPost(
      getItemById._id
    );
    if (!getItemById) {
      return res.status(404).json({ message: "Item not found!" });
    } else {
      res.status(201).json({ getItemById, getCommentsOfItem });
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const UpdateItem = async (req, res) => {
  try {
    const updateItem = await ItemService.UpdateItem(req.params.id, req.body);
    if (!updateItem) {
      return res.status(404).json({ message: "Item not found!" });
    } else {
      res.status(201).json(updateItem);
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const DeleteItem = async (req, res) => {
  try {
    const deleteItem = await ItemService.DeleteItem(req.params.id);
    if (!deleteItem) {
      return res.status(404).json({ message: "Item not found!" });
    } else {
      res.status(200).json(deleteItem);
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  CreateItem,
  GetItems,
  GetItemById,
  UpdateItem,
  DeleteItem,
};
