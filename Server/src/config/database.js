import mongoose from "mongoose";
mongoose.set("strictQuery", false);

/***************************  SETUP DATABASE CONNECTION  ***************************/
const MONGO_URI = process.env.MONGO_DB_URL;

const connectToDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection) console.log(`Connected To DB: ${connection.host}`);
  } catch (error) {
    console.log("Error in DB Connection", error);
    process.exit(1);
  }
};

export default connectToDB;
