const express = require("express");
const router = require("./entryPoint");
const Router = express.Router();

const sendEmail = require("../controller/email");

router.route("/sendEmail").post(sendEmail);

module.exports = router;
