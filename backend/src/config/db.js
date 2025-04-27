/* import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  
  try {
   const connectionInstance = await mongoose.connect( 
      `${process.env.MONGODB_URI}/${DB_NAME}`
    ); 
    const connection = mongoose.createConnection(uri)
    console.log(
      `MONGODB CONNECTED SUCCESSFULLY !! HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MONGODB CONNECTION ERROR ${error}`);
    process.exit(1);
  }
};

export default connectDB; */
import mongoose from "mongoose";
import {DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const uri = `${process.env.MONGODB_URI}`;
    const connectionInstance = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MONGODB CONNECTED SUCCESSFULLY!! HOST: ${connectionInstance.connection.host}`
    );
    console.log("Mongo URI:", process.env.MONGODB_URI);
  } catch (error) {
    console.log(`MONGODB CONNECTION ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
