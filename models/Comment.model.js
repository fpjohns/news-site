const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  nameComment: String,
  textComment: String,
  newsWrittenComment: {
    type: mongoose.SchemaTypes.ObjectId,
  }
});

const comment = mongoose.model("comment", commentSchema);

module.exports = comment; 