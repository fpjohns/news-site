const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  deleteComment: async (req, res) => {
    try {
      const comment = await Comment.find(req.params.id);
      res.json(comment);
    } catch (e) {
      res.json(e.messege);
    }
  },
  addComment: async (req, res) => {
    try{
      const comment = await Comment.findById(req.params.id)
    res.json(comment)
    }catch(e){
      res.json(e.messege)
    }
    
  },
  getComment: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id)
      res.json(comment)
    } catch(e){
      res.json(e.messege)
    }
  }

  
};
  