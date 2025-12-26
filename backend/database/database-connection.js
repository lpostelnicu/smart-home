// import { MongoClient, Db, Collection, Document } from "mongodb";
import { MongoClient } from "mongodb";

export default async function databaseConnection() {
  const client = new MongoClient(process.env.MONGODBURI);

  try {
    const database = client.db(process.env.DB_NAME);
    const articles = database.collection('articles');

    // Testing that the database is working.
    const query = { title: 'First article' };
    const articleTitle = await articles.findOne(query);
    console.log("The title of the article is ==== ", articleTitle);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  } finally {
    // await client.close(); // ????
  }
}



/**
 * Closes the database connection
 * This should be called when the application is shutting down
 */
// export async function closeDatabaseConnection() {
//   if (client) {
//     await client.close();
//     console.log("Database connection closed");
//   }
// }
