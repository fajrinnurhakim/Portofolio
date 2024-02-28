const AwardRepository = require("../repositories/awardRepository.js");

class AwardService {
    static findAll = async (params, next) => {
        try {
            const awards = await AwardRepository.findAll();
            return awards;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const awards = await AwardRepository.findOne(id, next);
            return awards;
        } catch (err) {
            next(err);
        }
    };

    static create = async (params) => {
        try {
            const { award_name, institution_award, win_date } = params;

            const award = await AwardRepository.create({
                award_name,
                institution_award,
                win_date,
            });
            return award;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedAward = await AwardRepository.update(id, data);

            if (!updatedAward) {
                return null;
            }

            return updatedAward;
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (id, next) => {
        try {
            const result = await AwardRepository.destroy(id);

            if (result === null) {
                return null; 
            }

            return true; 
        } catch (err) {
            next(err);
        }
    };
}

module.exports = AwardService;
