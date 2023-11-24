const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/rolesController");

router.get("/", RoleController.findAll);
router.get("/:id", RoleController.findOne);
router.post("/", RoleController.create);
router.put("/:id", RoleController.update);
router.delete("/:id", RoleController.destroy);

module.exports = router;
