const mongoose = require("mongoose");

const uri =
  "mongodb+srv://short:short123@cluster0.5kibois.mongodb.net/?retryWrites=true&w=majority";

const connectDb = () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  });
  

  const db = mongoose.connection;

  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Connected to Database"));
};

module.exports = connectDb;