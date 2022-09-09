const { Router } = require("express");
const { categoriesController } = require("../controllers/categories.controller");


const router = Router();

router.get("/category", categoriesController.getCategories);
router.get("/category/news", categoriesController.getCategories);
router.post("/category", categoriesController.addCategories);
router.delete("/category,", categoriesController.removeCategory)

module.exports = router;
