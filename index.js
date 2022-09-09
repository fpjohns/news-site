const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(require("./routes/comments.route"))
app.use(require("./routes/news.route"))
app.use(require('./routes/categories.route'))


mongoose.connect(
  "mongodb+srv://fpjohns:denni2010@cluster0.7omondk.mongodb.net/News?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    }

    console.log("db connected");

    app.listen(3000, () => {
      console.log("started");
    });
  }
);
