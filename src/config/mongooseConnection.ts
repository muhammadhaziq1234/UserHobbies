import mongoose from "mongoose";
let database: mongoose.Connection;
export const connect = () => {
  // add your own uri below
  const uri =
    "mongodb+srv://MuhammadHaziq:nextbridge18@cluster0.qyb5k.mongodb.net/User-Hobbies";
  if (database) {
    return;
  }
  mongoose.connect(uri);
  database = mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
