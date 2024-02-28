const { Role } = require("../models");

class RoleRepository {
    static findAll = async (params, next) => {
        try {
            const roles = await Role.findAll();
            return roles;
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (id, next) => {
        try {
            const roles = await Role.findOne({
                where: {
                    id,
                },
            });
            if (!roles) {
                throw { name: "ErrorNotFound" };
            }
            return roles;
        } catch (err) {
            next(err);
        }
    };
    static create = async (payload) => {
        try {
            const role = await Role.create(payload);
            return role;
        } catch (err) {
            next(err);
        }
    };
    static update = async (id, data) => {
        try {
            const [rowsUpdated, updatedRoles] = await Role.update(data, {
                where: { id },
                returning: true,
            });

            if (rowsUpdated === 0) {
                return null; 
            }

            return updatedRoles[0];
        } catch (err) {
            throw err;
        }
    };

    static destroy = async (id) => {
        try {
            const deletedRowCount = await Role.destroy({
                where: { id },
            });

            if (deletedRowCount === 0) {
                return null; 
            }

            return true; 
        } catch (err) {
            throw err;
        }
    };
}

module.exports = RoleRepository;
