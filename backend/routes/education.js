const express = require("express");
const router = express.Router();
const EducationController = require("../controllers/educationController");

router.get("/", EducationController.findAll);
router.get("/:id", EducationController.findOne);
router.post("/", EducationController.create);
router.put("/:id", EducationController.update);
router.delete("/:id", EducationController.destroy);

module.exports = router;
