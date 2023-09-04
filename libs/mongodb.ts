import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("db connected");
      }
    } else {
      console.log("MONGODB_URI could not be empty or null!");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
