"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Socmed extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Socmed.init(
        {
            socmed_image: DataTypes.STRING,
            socmed_link: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Socmed",
        }
    );
    return Socmed;
};
