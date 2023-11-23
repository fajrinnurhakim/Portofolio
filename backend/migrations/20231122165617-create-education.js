"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Education", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            education_name: {
                type: Sequelize.STRING,
            },
            institution_education: {
                type: Sequelize.STRING,
            },
            type_education: {
                type: Sequelize.STRING,
            },
            start_date: {
                type: Sequelize.INTEGER,
            },
            end_date: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Education");
    },
};
