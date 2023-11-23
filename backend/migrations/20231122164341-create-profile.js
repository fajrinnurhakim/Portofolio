'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      main_role: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      link_cv: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      image_two: {
        type: Sequelize.STRING
      },
      year_experience: {
        type: Sequelize.INTEGER
      },
      tech_stack: {
        type: Sequelize.INTEGER
      },
      success_project: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profiles');
  }
};