'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RestaurantLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RESTAURANT_NAME: {
        type: Sequelize.STRING
      },
      RESTAURANT_IMAGE: {
        type: Sequelize.STRING
      },
      RESTAURANT_DESCRIPTION: {
        type: Sequelize.STRING
      },
      RESTAURANT_ADDRESS: {
        type: Sequelize.STRING
      },
      RESTAURANT_NUMBER: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('RestaurantLists');
  }
};