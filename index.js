const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ItemRoute = require("./routes/itemRoute");
const CommentRoute = require("./routes/commentRoute");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Couldn't connect to DB ", err));

//parsing json body data
app.use(express.json());

//setting up roues
app.use("/item", ItemRoute);
app.use("/comment", CommentRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
