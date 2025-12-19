import express from "express";
import "dotenv/config";

const port = parseInt(process.env.PORT || "3000");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello there! This is the server for a Smart Home.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  
});
