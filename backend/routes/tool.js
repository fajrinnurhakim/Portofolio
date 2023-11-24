const express = require("express");
const router = express.Router();
const ToolController = require("../controllers/toolsController");

router.get("/", ToolController.findAll);
router.get("/:id", ToolController.findOne);
router.post("/", ToolController.create);
router.put("/:id", ToolController.update);
router.delete("/:id", ToolController.destroy);

module.exports = router;
