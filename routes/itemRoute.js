const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/itemController");

router.post("/", ItemController.CreateItem);
router.get("/", ItemController.GetItems);
router.get("/:id", ItemController.GetItemById);
router.put("/:id", ItemController.UpdateItem);
router.delete("/:id", ItemController.DeleteItem);

module.exports = router;
