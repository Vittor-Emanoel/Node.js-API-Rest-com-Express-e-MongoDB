import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://vittor:300321Vb@alura.tesy5xd.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
