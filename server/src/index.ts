import app from "./app";
import connectDB from "./config/db";

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error while starting the server: ", error);
  }
};

startServer();
