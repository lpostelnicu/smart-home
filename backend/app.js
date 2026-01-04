import express from "express";
import "dotenv/config";
// import { connectToDatabase } from "./database/database-connection.js";
import connectDB from "./database/connect-db.js";
import HouseRouter from "./routes/HouseRouter.js";

const port = parseInt(process.env.PORT || "3000");

await connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", HouseRouter);

app.get("/", (req, res) => {
  res.send("Hello there! This is the server for a Smart Home.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  
});
