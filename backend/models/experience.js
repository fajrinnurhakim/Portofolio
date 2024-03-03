"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Experience extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Experience.init(
        {
            experience_name: DataTypes.STRING,
            experience_image: DataTypes.STRING,
            institution_name: DataTypes.STRING,
            tech_stack1: DataTypes.STRING,
            tech_stack2: DataTypes.STRING,
            tech_stack3: DataTypes.STRING,
            type: DataTypes.STRING,
            start_date: DataTypes.INTEGER,
            end_date: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Experience",
        }
    );
    return Experience;
};
