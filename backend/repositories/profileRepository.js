const { Profile } = require("../models");

class ProfileRepository {
    static findAll = async (params, next) => {
        try {
            const profiles = await Profile.findAll();
            return profiles;
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (id, next) => {
        try {
            const profiles = await Profile.findOne({
                where: {
                    id,
                },
            });
            if (!profiles) {
                throw { name: "ErrorNotFound" };
            }
            return profiles;
        } catch (err) {
            next(err);
        }
    };
    static create = async (payload) => {
        try {
            const profile = await Profile.create(payload);
            return profile;
        } catch (err) {
            next(err);
        }
    };
    static update = async (id, data) => {
        try {
            const [rowsUpdated, updatedProfiles] = await Profile.update(data, {
                where: { id },
                returning: true,
            });

            if (rowsUpdated === 0) {
                return null; // Profile not found
            }

            return updatedProfiles[0];
        } catch (err) {
            throw err;
        }
    };

    static destroy = async (id) => {
        try {
            const deletedRowCount = await Profile.destroy({
                where: { id },
            });

            if (deletedRowCount === 0) {
                return null; // Profile not found
            }

            return true; // Deletion successful
        } catch (err) {
            throw err;
        }
    };
}

module.exports = ProfileRepository;
