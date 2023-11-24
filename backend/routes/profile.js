const express = require("express");
const router = express.Router();
const ProfileController = require("../controllers/profilesController");

router.get("/", ProfileController.findAll);
router.get("/:id", ProfileController.findOne);
router.post("/", ProfileController.create);
router.put("/:id", ProfileController.update);
router.delete("/:id", ProfileController.destroy);

module.exports = router;
