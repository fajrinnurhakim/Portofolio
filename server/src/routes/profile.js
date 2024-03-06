const express = require("express");
const router = express.Router();
const ProfileController = require("../controllers/profilesController");

router.get("/", ProfileController.findMany);
router.get("/:id", ProfileController.findUnique);
router.post("/", ProfileController.create);
router.put("/:id", ProfileController.update);
router.delete("/:id", ProfileController.delete);

module.exports = router;
