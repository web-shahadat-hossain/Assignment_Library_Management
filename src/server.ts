import app from "./app";
import mongoose from "mongoose";

const port = 5000;

const bootstrap = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("database connected");
      app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (er) {
    console.log(er);
  }
};

bootstrap();
