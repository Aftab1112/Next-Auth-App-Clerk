import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("Mongodb already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Next-Auth-App",
    });
    console.log("Mongodb connected");
    initialized = true;
  } catch (error) {
    console.error("Mongodb connection error", error);
  }
};
