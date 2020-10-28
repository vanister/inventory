import { TableNames } from '../models';
import { typeAttributesBase } from '../models/TypeBase';
import { QueryInterface, Sequelize } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.createTable(TableNames.ComponentTypes, {
      ...typeAttributesBase
    });
  },
  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.dropTable(TableNames.ComponentTypes);
  }
};
