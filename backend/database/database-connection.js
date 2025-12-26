/**
 * Database Configuration and Connection Management
 */

import { MongoClient } from "mongodb";

let client;
let database;

async function _connectToDatabase() {
  // Return existing connection if already established
  // This prevents creating multiple connections unnecessarily
  if (database) {
    return database;
  }

  // Retrieve MongoDB connection string from environment variables
  const uri = process.env.MONGODBURI;

  // Name of database to connect
  const dbName = process.env.DB_NAME;

  if (!uri) {
    throw new Error(
      "MongoDB URI environment variable is not defined. Please check your .env file and ensure it contains a valid MongoDB connection string."
    );
  }

  try {
    // Create new MongoDB client instance
    client = new MongoClient(uri);

    // Connect to MongoDB
    await client.connect();

    // Get reference to the database
    database = client.db(dbName);

    console.log(`Connected to database: ${database.databaseName}.`);

    return database;
  } catch (error) {
    throw error;
  }
}

let connect$;

export async function connectToDatabase() {
  // connect$ only gets assigned exactly once on the first request, ensuring all subsequent requests use the same connect$ promise.
  connect$ ??= _connectToDatabase();
  return await connect$;
}

export function getCollection(collectionName) {
  if (!database) {
    throw new Error("Database not connected.");
  }

  return database.collection(collectionName);
}

/**
 * Closes the database connection
 * This should be called when the application is shutting down
 */
export async function closeDatabaseConnection() {
  if (client) {
    await client.close();
    console.log("Database connection closed.");
  }
}
