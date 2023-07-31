const commentServices = require("../services/commentService");

const postComment = async (req, res) => {
  try {
    const postComment = await commentServices.postComment(req.body);
    res.status(201).json(postComment);
  } catch (e) {
    res.status(500).json({ message: "Error", e });
  }
};

const getComments = async (req, res) => {
  try {
    //you need to initialize const like this else you the json reqonse will show error
    const getComments = await commentServices.getComments();
    res.status(201).json(getComments);
  } catch (e) {
    res.status(500).json({ message: "Error", e });
  }
};

const getCommentsOfPost = async (req, res) => {
  try {
    await res
      .status(201)
      .json(commentServices.postComment(req.params.itemid, req.body));
  } catch (e) {
    res.status(500).json({ message: "Error", e });
  }
};

const updateComment = async (req, res) => {
  try {
    await res
      .status(201)
      .json(commentServices.updateComment(req.params.id, req.body));
  } catch (e) {
    res.status(500).json({ message: "Error", e });
  }
};

const deleteComment = async (req, res) => {
  try {
    await res.status(201).json(commentServices.deleteComment(req.params.id));
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
