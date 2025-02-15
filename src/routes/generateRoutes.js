const express = require("express");
const router = express.Router();
const generateController = require("../controllers/generateController");

router.post("/generate", generateController.generateTokens);

module.exports = router;
