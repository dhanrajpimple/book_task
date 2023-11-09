const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const database = require("./config/database");
const bookRoutes = require("./routes/Book");


app.use(bodyParser.json());

const dotenv = require("dotenv");

const PORT = process.env.PORT || 5000;
dotenv.config();


database.connect();



app.use("/api/book/", bookRoutes);



app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});


app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});


