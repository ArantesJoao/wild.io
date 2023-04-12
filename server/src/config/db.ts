import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Successful MongoDB connection");
  } catch (error) {
    console.error("Error while connecting to DB:", error);
    process.exit(1);
  }
};

export default connectDB;
