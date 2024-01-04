import mongoose from "mongoose";

export async function mongoConnect() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      dbName: "fitfrenzy",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
}

export function mongoErrorListener() {
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
}

export function mongoConnectListener() {
  mongoose.connection.on("connected", () => {
    console.log("Connection established");
  });
}

export function mongoDisconnectListener() {
  mongoose.connection.on("disconnected", () => {
    console.log("Connection interrupted");
  });
}

export function mongoCloseConnection() {
  mongoose.connection.close();
}
