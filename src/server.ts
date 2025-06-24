import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;

const bootstrap = async () => {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    console.log("database connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (er) {
    console.log(er);
  }
};

bootstrap();
