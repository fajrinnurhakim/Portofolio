"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Portofolio extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Portofolio.init(
        {
            portofolio_name: DataTypes.STRING,
            portofolio_image: DataTypes.STRING,
            tech_stack1: DataTypes.INTEGER,
            tech_stack2: DataTypes.INTEGER,
            tech_stack3: DataTypes.INTEGER,
            description: DataTypes.STRING,
            link_github: DataTypes.STRING,
            link_demo: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Portofolio",
        }
    );
    return Portofolio;
};
