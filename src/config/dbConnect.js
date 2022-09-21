import mongoose from "mongoose";

mongoose.connect(
//   "mongodb+srv://vittor:Vb@alura.tesy5xd.mongodb.net/alura-node"
// );

let db = mongoose.connection;

export default db;
