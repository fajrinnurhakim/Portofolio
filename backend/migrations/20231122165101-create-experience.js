"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Experiences", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            experience_description: {
                type: Sequelize.STRING,
            },
            experience_name: {
                type: Sequelize.STRING,
            },
            institution_name: {
                type: Sequelize.STRING,
            },
            tech_stack1: {
                type: Sequelize.STRING,
            },
            tech_stack2: {
                type: Sequelize.STRING,
            },
            tech_stack3: {
                type: Sequelize.STRING,
            },
            type: {
                type: Sequelize.STRING,
            },
            start_date: {
                type: Sequelize.STRING,
            },
            end_date: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("Experiences");
    },
};
