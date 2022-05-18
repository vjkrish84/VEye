import express from "express";
import lockSystem from "lock-system";
var app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", __dirname + "/views");
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

app.get("/capture", function (req, res) {
  console.log("inside capture");
  res.render("index.html");
});

app.get("/lock", function (req, res) {
  console.log("inside lock");
  lockSystem();
});

var server = app.listen(8081, function () {
  console.log("App Started on PORT 8081");
});

export default app;

// Console will print the message
console.log("Server running at http://127.0.0.1:8081/");
