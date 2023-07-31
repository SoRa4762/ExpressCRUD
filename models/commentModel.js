const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Items",
    required: true,
  },
});

module.exports = mongoose.model("Comments", CommentSchema);
