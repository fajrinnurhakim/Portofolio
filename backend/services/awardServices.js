const AwardRepository = require("../repositories/awardRepository.js")

class AwardService {
    static findAll = async (params, next) => {
        try {
            const awards = await AwardRepository.findAll(params, next);
            return awards
        } catch(err) {
            next(err);
        }
    };
}

module.exports = AwardService;
