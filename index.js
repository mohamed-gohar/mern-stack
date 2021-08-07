const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const path = require("path");

// app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static builds
app.use(express.static(path.json(__dirname, "client", "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.js"));
});

//connect mongodb
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongodb connected..."))
  .catch((e) => console.error(e));

// User Routes
app.use("/api/items", require("./routes/api/item"));

app.use((req, res) => {
  res.status(404).type("text").send("Not found");
});
// start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server started on port " + port));
