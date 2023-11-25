import mongoose from "mongoose";

function makeConnectionString() {
  const {
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD,
    MONGO_INITDB_HOST,
    MONGO_INITDB_PORT,
    MONGO_INITDB_DATABASE,
  } = process.env;

  return `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_INITDB_HOST}:${MONGO_INITDB_PORT}/${MONGO_INITDB_DATABASE}?authSource=admin`;
}

export default async function makeDbConnection() {
  try {
    const connectionString = makeConnectionString();
    await mongoose.connect(connectionString);

    console.log("Connected to database!");
  } catch (error) {
    console.error(error);
  }
}
