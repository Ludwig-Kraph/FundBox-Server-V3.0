const express = require("express");
const router = express.Router();
const swapController = require("../controllers/swapController");

router.post("/swap", swapController.swapTokens);

module.exports = router;
