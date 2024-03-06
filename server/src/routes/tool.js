const express = require("express");
const router = express.Router();
const ToolController = require("../controllers/toolsController");

router.get("/", ToolController.findMany);
router.get("/:id", ToolController.findUnique);
router.post("/", ToolController.create);
router.put("/:id", ToolController.update);
router.delete("/:id", ToolController.delete);

module.exports = router;
