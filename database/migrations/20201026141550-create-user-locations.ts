import { TableNames } from '../models';
import { userLocationAttributes } from '../models/UserLocations';
import { QueryInterface, Sequelize } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.createTable(TableNames.UserLocations, {
      ...userLocationAttributes
    });
  },
  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.dropTable(TableNames.UserLocations);
  }
};
