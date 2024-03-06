const express = require("express");
const router = express.Router();
const TechController = require("../controllers/techesController");

router.get("/", TechController.findMany);
router.get("/:id", TechController.findUnique);
router.post("/", TechController.create);
router.put("/:id", TechController.update);
router.delete("/:id", TechController.delete);

module.exports = router;
