const express = require("express");
const router = express.Router();
const ExperienceController = require("../controllers/experiencesController");

router.get("/", ExperienceController.findAll);
router.get("/:id", ExperienceController.findOne);
router.post("/", ExperienceController.create);
router.put("/:id", ExperienceController.update);
router.delete("/:id", ExperienceController.destroy);

module.exports = router;
