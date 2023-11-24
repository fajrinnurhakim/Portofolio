const { Award } = require("../models");

class AwardRepository {
    static findAll = async (params, next) => {
        try {
            const awards = await Award.findAll();
            return awards;
        } catch (err) {
            next(err);
        }
    };
}

module.exports = AwardRepository;
