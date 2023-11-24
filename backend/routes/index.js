const express = require("express");
const router = express.Router();
const awardRouter = require("./award.js");

router.use("/awards", awardRouter);

module.exports = router;
