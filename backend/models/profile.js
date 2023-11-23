"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Profile extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Profile.init(
        {
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            main_role: DataTypes.STRING,
            description: DataTypes.STRING,
            link_cv: DataTypes.STRING,
            image: DataTypes.STRING,
            image_two: DataTypes.STRING,
            year_experience: DataTypes.INTEGER,
            tech_stack: DataTypes.INTEGER,
            success_project: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Profile",
        }
    );
    return Profile;
};
