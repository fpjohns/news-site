const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getCategories: (req, res) => {
    try {
        const category = Category.find()
        res.json(category)

    }catch(e){
        res.json(e.message)
    }
  },

  addCategories: async (req, res) => {
    try {
      const category = await Category.create({
        nameCategory: req.body.nameCategory,
      });
      res.json(category);
    } catch (e) {
      res.json(e.message);
    }
  },
  removeCategory: async(req, res) => {
    try {
      const category = Category.deleteOne()
      res.json('категория удалена')
      
    }catch(e){  
      res.json(e.message)
    }
  }
};
