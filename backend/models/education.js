"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Education extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    Education.init(
        {
            education_name: DataTypes.STRING,
            institution_education: DataTypes.STRING,
            type_education: DataTypes.STRING,
            start_date: DataTypes.INTEGER,
            end_date: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Education",
        }
    );
    return Education;
};
