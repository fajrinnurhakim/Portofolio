"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Award extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    Award.init(
        {
            award_name: DataTypes.STRING,
            institution_award: DataTypes.STRING,
            win_date: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Award",
        }
    );
    return Award;
};
