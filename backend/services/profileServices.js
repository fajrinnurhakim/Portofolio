const ProfileRepository = require("../repositories/profileRepository.js");

class ProfileService {
    static findAll = async (params, next) => {
        try {
            const profiles = await ProfileRepository.findAll();
            return profiles;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const profiles = await ProfileRepository.findOne(id, next);
            return profiles;
        } catch (err) {
            next(err);
        }
    };

    static create = async (data, next) => {
        try {
            const createdProfile = await ProfileRepository.create(data);
            return createdProfile;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedProfile = await ProfileRepository.update(id, data);

            if (!updatedProfile) {
                return null; // Profile not found
            }

            return updatedProfile;
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (id, next) => {
        try {
            const result = await ProfileRepository.destroy(id);

            if (result === null) {
                return null; // Profile not found
            }

            return true; // Deletion successful
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ProfileService;
