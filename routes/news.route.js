const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.get("/news", newsController.getNews);
router.get("/news/:id", newsController.getNewsById);
router.post("/news", newsController.addNews);
router.patch("/news", newsController.changeNews )

module.exports = router;
    