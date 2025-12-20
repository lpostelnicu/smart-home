import express from "express";
import ArticleModel from "../model-demo/article.js";

const router = express.Router();
 
router.post("/articles", async (req, res) => {
  const article = new ArticleModel(req.body);
 
  try {
    await article.save();
    res.send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});
 
export default router;