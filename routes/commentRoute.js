const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/", commentController.postComment);
router.get("/", commentController.getComments);
router.get("/:itemid", commentController.getCommentsOfPost);
router.put("/:id", commentController.updateComment);
router.delete("/:id", commentController.deleteComment);

module.exports = router;
