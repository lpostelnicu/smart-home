import express from "express";
import "dotenv/config";
import connectDB from "./database/connect-db.js";
import ArticleRoute from "./route-demo/article-route.js"; 

const port = parseInt(process.env.PORT || "3000");

await connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ArticleRoute);

app.get("/", (req, res) => {
  res.send("Hello there! This is the server for a Smart Home.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  
});

// await connectDB();
