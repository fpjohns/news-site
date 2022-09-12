
const mongoose = require("mongoose");
const NewsSchema = mongoose.Schema({
  title: String,
  text: String,
  categories: String,
  categoriesID: {
    type: mongoose.SchemaTypes.ObjectId,
  } 
});

const News = mongoose.model("News", NewsSchema);

module.exports = News; 