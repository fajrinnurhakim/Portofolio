const RoleRepository = require("../repositories/roleRepository.js");

class RoleService {
    static findAll = async (params, next) => {
        try {
            const roles = await RoleRepository.findAll();
            return roles;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const roles = await RoleRepository.findOne(id, next);
            return roles;
        } catch (err) {
            next(err);
        }
    };

    static create = async (params) => {
        try {
            const { role_name, role_level } = params;

            const role = await RoleRepository.create({
                role_name,
                role_level,
            });
            return role;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedRole = await RoleRepository.update(id, data);

            if (!updatedRole) {
                return null;
            }

            return updatedRole;
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (id, next) => {
        try {
            const result = await RoleRepository.destroy(id);

            if (result === null) {
                return null;
            }

            return true;
        } catch (err) {
            next(err);
        }
    };
}

module.exports = RoleService;
