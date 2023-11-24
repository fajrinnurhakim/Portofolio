const express = require("express");
const router = express.Router();
const awardRouter = require("./award.js");
const educationRouter = require("./education.js");
const experienceRouter = require("./experience.js");
const portofolioRouter = require("./portofolio.js");
const profileRouter = require("./profile.js");
const roleRouter = require("./role.js");
const techRouter = require("./tech.js");
const toolRouter = require("./tool.js");

router.use("/awards", awardRouter);
router.use("/education", educationRouter);
router.use("/experiences", experienceRouter);
router.use("/portofolios", portofolioRouter);
router.use("/profiles", profileRouter);
router.use("/roles", roleRouter);
router.use("/teches", techRouter);
router.use("/tools", toolRouter);

module.exports = router;
