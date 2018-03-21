'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      follows: {
        type: Sequelize.NUMBER
      },
      followers: {
        type: Sequelize.NUMBER
      },
      user_photo: {
        type: Sequelize.STRING
      },
      likes: {
        type: Sequelize.NUMBER
      },
       description: {
        type: Sequelize.STRING
      },
      images:{
        type: Sequelize.ARRAY
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profiles');
  }
};