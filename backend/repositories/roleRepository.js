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
}

module.exports = RoleRepository;
