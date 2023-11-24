const ProfileService = require("../services/profileServices");

class ProfileController {
    static findAll = async (req, res, next) => {
        try {
            const profiles = await ProfileService.findAll(req.query, next);
            res.status(200).json(profiles);
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (req, res, next) => {
        try {
            const profile = await ProfileService.findOne(req.params, next);
            res.status(200).json(profile);
        } catch (err) {
            next(err);
        }
    };
    static create = async () => {};
    static update = async () => {};
    static destroy = async () => {};
}

module.exports = ProfileController;
