import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://Vittor:****@cluster0.ujzzcdb.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
