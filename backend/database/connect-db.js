import mongoose from "mongoose";

export default async function connectDB() {
  // const url = process.env.MONGODBURI;
  try {
    await mongoose.connect(process.env.MONGODBURI);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log("Database open");
  });

  dbConnection.on("connected", () => {
    console.log("Database connected!!!");
  });
 
  dbConnection.on("error", (err) => {
    console.error(`Database connection error: ${err}`); // this should be logged with Morgan or other.
  });
  return;
}
