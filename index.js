const express = require("express");
const mongoose = require("mongoose");

// app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect mongodb
const mongoURI = require("./config/keys").MONGO_URI || process.env.MONGO_URI;
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
