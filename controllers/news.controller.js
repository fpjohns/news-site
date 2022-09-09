const News = require("../models/News.model");

module.exports.newsController = {
    getNews: async(req, res) => {
        try {
            const news = await News.find()
            res.json(news)
    
        }catch(e) {
            res.json(e.message)
        }
       
      },

  addNews: async(req, res) => {
    const { title, text,  categoriesID } = req.body
    try {
        const news = await News.create({
            title,
            text,
            categoriesID,
        })
        res.json(news)
    }catch(e) {
        res.json('e')
    }
  },
  getNewsById: async(req, res) => {
    try {
        const news = await News.findById(req.params.id)
        res.json(news)
    }catch(e) {
        res.json(e.message)
    }
    
  },
 
    changeNews: async(req, res) =>{
        try{
            const news = await News.findByIdAndUpdate(req.params.id)
            res.json
        }catch(e){
            res.json(e.message)
        }
    }
  
};
