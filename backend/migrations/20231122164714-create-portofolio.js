"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Portofolios", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            portofolio_name: {
                type: Sequelize.STRING,
            },
            portofolio_image: {
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
            description: {
                type: Sequelize.STRING,
            },
            link_github: {
                type: Sequelize.STRING,
            },
            link_demo: {
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
        await queryInterface.dropTable("Portofolios");
    },
};
