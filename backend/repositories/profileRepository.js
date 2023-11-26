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
}

module.exports = ProfileRepository;
