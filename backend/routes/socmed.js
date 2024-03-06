const express = require("express");
const router = express.Router();
const SocmedController = require("../controllers/socmedsController");

router.get("/", SocmedController.findAll);
router.get("/:id", SocmedController.findOne);
router.post("/", SocmedController.create);
router.put("/:id", SocmedController.update);
router.delete("/:id", SocmedController.destroy);

module.exports = router;
