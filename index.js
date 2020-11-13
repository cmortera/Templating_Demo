const express = require("express");
const app = express();
const path = require("path");
//Do not need to require EJS
app.set("view engine", "ejs");

//joining path where index.js is with /views if starting nodemon outside of that directory
app.set("views", path.join(__dirname, "/views"));

// app.get("/random", (req, res) => {
//   const num = Math.floor(Math.random() * 10) + 1;
//   // Render the file name, then key value pair of the variable
//   res.render("random", { rand: num });
// });

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Subie"];
  res.render("cats", { cats });
});

app.get("/", (req, res) => {
  res.render("home");
});
app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
