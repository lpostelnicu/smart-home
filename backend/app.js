import express from "express";
import "dotenv/config";
import cors from "cors";
// import { connectToDatabase } from "./database/database-connection.js";
import connectDB from "./database/connect-db.js";
import HouseRouter from "./routes/HouseRouter.js";

// const clientAppOrigin = process.env.CLIENT_URL;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

const hostname = process.env.HOSTNAME;
const port = parseInt(process.env.PORT || "3000");
const host_url = process.env.HOST_URL;

await connectDB();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", HouseRouter);

// app.get("/", (req, res) => {
//   res.send("Hello there! This is the server for a Smart Home.");
// });

// app.get("/", (req, res) => {
//   res.json({ fruits: ["apple","banana", "melon", "Pomegranate", "orange"] });
// });

app.listen(port, hostname, () => {
  console.log(`Server is running at ${host_url}`);
  
});
