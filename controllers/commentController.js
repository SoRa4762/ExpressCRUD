const commentServices = require("../services/commentService");

const postComment = async (req, res) => {
  try {
    //you need to initialize const like this else you the json reqonse will show error
    const postComment = await commentServices.postComment(req.body);
    res.status(201).json(postComment);
  } catch (e) {
    res.status(500).json({ message: "Error", e });
  }
};

const getComments = async (req, res) => {
  try {
    const getComments = await commentServices.getComments();
    res.status(201).json(getComments);
  } catch (e) {
    res.status(500).json({ message: "Error", e });
  }
};

const getCommentsOfPost = async (req, res) => {
  try {
    const getCommentsOfPost = await commentServices.postComment(
      req.params.itemid,
      req.body
    );
    if (!getCommentsOfPost) {
      return res.status(404).json({ message: "Comment not found" });
    } else {
      res.status(201).json(getCommentsOfPost);
    }
  } catch (e) {
    res.status(500).json({ message: "Error", e });
  }
};

const updateComment = async (req, res) => {
  try {
    const updateComment = await commentServices.updateComment(
      req.params.id,
      req.body
    );
    if (!updateComment) {
      return res.status(404).json({ message: "Comment not found" });
    } else {
      res.status(201).json(updateComment);
    }
  } catch (e) {
    res.status(500).json({ message: "Error", e });
  }
};

const deleteComment = async (req, res) => {
  try {
    const deleteComment = await commentServices.deleteComment(req.params.id);
    if (!deleteComment) {
      return res.status(404).json({ message: "Comment not found" });
    } else {
      res.status(201).json(deleteComment);
    }
  } catch (e) {
    res.status(500).json({ message: "Error", e });
  }
};

module.exports = {
  postComment,
  getComments,
  getCommentsOfPost,
  updateComment,
  deleteComment,
};
