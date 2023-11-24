const express = require("express");
const router = express.Router();
const AwardController = require("../controllers/awardsController");

router.get("/", AwardController.findAll);
router.get("/:id", AwardController.findOne);
router.post("/", AwardController.create);
router.put("/:id", AwardController.update);
router.delete("/:id", AwardController.destroy);

module.exports = router;
