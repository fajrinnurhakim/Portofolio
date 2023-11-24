const express = require("express");
const router = express.Router();
const PortofolioController = require("../controllers/portofoliosController");

router.get("/", PortofolioController.findAll);
router.get("/:id", PortofolioController.findOne);
router.post("/", PortofolioController.create);
router.put("/:id", PortofolioController.update);
router.delete("/:id", PortofolioController.destroy);

module.exports = router;
