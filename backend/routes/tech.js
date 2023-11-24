const express = require("express");
const router = express.Router();
const TechController = require("../controllers/techesController");

router.get("/", TechController.findAll);
router.get("/:id", TechController.findOne);
router.post("/", TechController.create);
router.put("/:id", TechController.update);
router.delete("/:id", TechController.destroy);

module.exports = router;
