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
    static create = async (req, res, next) => {
        try {
            console.log(req.body, "cek");
            const profile = await ProfileService.create(req.body);

            res.status(201).json({ message: "Profile created successfully" });
        } catch (err) {
            next(err);
        }
    };
    static update = async () => {
        try {
            const profileId = req.params.id;
            const updatedProfileData = req.body;

            const updatedProfile = await ProfileService.update(
                profileId,
                updatedProfileData,
                next
            );

            if (!updatedProfile) {
                res.status(404).json({ message: "Profile not found" });
                return;
            }

            res.status(200).json({ message: "Profile update successfully" });
        } catch (err) {
            next(err);
        }
    };
    static destroy = async () => {
        try {
            const profileId = req.params.id;
            const deletedProfile = await ProfileService.destroy(profileId, next);

            if (!deletedProfile) {
                res.status(404).json({ message: "Profile not found" });
                return;
            }

            res.status(200).json({ message: "Profile deleted successfully" });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ProfileController;
