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
            experience_name: {
                type: Sequelize.STRING,
            },
            Institution_name: {
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
        await queryInterface.dropTable("Experiences");
    },
};