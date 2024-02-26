const RoleService = require("../services/roleServices");

class RoleController {
    static findAll = async (req, res, next) => {
        try {
            const roles = await RoleService.findAll(req.query, next);
            res.status(200).json(roles);
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (req, res, next) => {
        try {
            const role = await RoleService.findOne(req.params, next);
            res.status(200).json(role);
        } catch (err) {
            next(err);
        }
    };
    static create = async (req, res, next) => {
        try {
            console.log(req.body, "cek");
            const role = await RoleService.create(req.body);

            res.status(201).json({ message: "Role created successfully" });
        } catch (err) {
            next(err);
        }
    };
    static update = async () => {
        try {
            const roleId = req.params.id;
            const updatedRoleData = req.body;

            const updatedRole = await RoleService.update(
                roleId,
                updatedRoleData,
                next
            );

            if (!updatedRole) {
                res.status(404).json({ message: "Role not found" });
                return;
            }

            res.status(200).json({ message: "Role update successfully" });
        } catch (err) {
            next(err);
        }
    };
    static destroy = async () => {
        try {
            const roleId = req.params.id;
            const deletedRole = await RoleService.destroy(roleId, next);

            if (!deletedRole) {
                res.status(404).json({ message: "Role not found" });
                return;
            }

            res.status(200).json({ message: "Role deleted successfully" });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = RoleController;
