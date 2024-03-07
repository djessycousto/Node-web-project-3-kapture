const express = require("express");
require("dotenv").config();
const ejs = require("ejs");
const path = require("path");
const nodeMailer = require("nodemailer");
const multer = require("multer"); // Import multer
const upload = multer(); // Create an instance of multer
const app = express();

const entryPoint = require("./router/entryPoint");
const emailRouter = require("./router/emailRouter");

app.use(express.json());
app.use(upload.none());
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// register view
app.set("view engine", "ejs");

app.use("/", entryPoint);
app.use("/contact", emailRouter);
const port = 3000;
app.listen(port, () => {
  console.log("connected to port ", port);
});
