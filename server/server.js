const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());

const { DB_USER, DB_PASS, DB_HOST, DB_NAME, PORT } = process.env;

const mongooseURL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(mongooseURL)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));

const wollplatzRoute = require("./routes/woolplatz/wollplatzRoute");

app.use(`/wollplatz`, wollplatzRoute);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => console.log("Server is listening."));
