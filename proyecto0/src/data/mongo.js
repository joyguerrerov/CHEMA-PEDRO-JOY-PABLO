const mongoose = require("mongoose");

const pass = "mongodb+srv://joyguerrerov:UPgrade889@cluster0.hn43jda.mongodb.net/deber";

const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("INFO: Conexión a BD correcta:", conn.connection.name);
  } catch (error) {
    console.log("ERROR: (f connectMongo) ->", error.message);
  }
};

module.exports = { connectMongo };