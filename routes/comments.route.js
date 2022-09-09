const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");



const router = Router();

router.get("/comment", commentsController.getComment);
router.post("/comment", commentsController.addComment);
router.delete("/comment/:id", commentsController.deleteComment);

module.exports = router;
