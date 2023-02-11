const express = require("express");
const cors = require("cors");
const router = require("./routes/main.route");
const connectDb = require("./config/database");

const app = express();

// Connect to Database
connectDb();

// Pre Middleware
app.use(express.json());
app.unsubscribe(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", router);

// app.get('/', (req, res)=>{
//     res.send("no problem, hello world")
// })

// Listen
app.listen(3001, () => console.log("Server started on port 3001"));
