const express = require("express");
const router = express.Router();
const SocmedController = require("../controllers/socmedsController");

router.get("/", SocmedController.findMany);
router.get("/:id", SocmedController.findUnique);
router.post("/", SocmedController.create);
router.put("/:id", SocmedController.update);
router.delete("/:id", SocmedController.delete);

module.exports = router;
