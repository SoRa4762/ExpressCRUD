const commentModel = require("../models/commentModel");

const postComment = (commentData) => {
  try {
    return commentModel.create(commentData);
  } catch (e) {
    throw e;
  }
};
const getComments = () => {
  try {
    return commentModel.find();
  } catch (e) {
    throw e;
  }
};
const getCommentsOfPost = (itemId) => {
  try {
    return commentModel.findById({ where: itemId });
  } catch (e) {
    throw e;
  }
};
const updateComment = (commentId, commentData) => {
  try {
    return commentModel.findByIdAndUpdate(commentId, commentData, {
      new: true,
    });
  } catch (e) {
    throw e;
  }
};
const deleteComment = (commentId) => {
  try {
    return commentModel.findByIdAndDelete(commentId);
  } catch (e) {
    throw e;
  }
};

module.exports = {
  postComment,
  getComments,
  getCommentsOfPost,
  updateComment,
  deleteComment,
};
