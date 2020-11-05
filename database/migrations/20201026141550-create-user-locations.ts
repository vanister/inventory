import { TableNames } from '../models';
import { userLocationAttributes } from '../models/UserLocations';
import { QueryInterface, Sequelize } from 'sequelize';

async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.createTable(TableNames.UserLocations, {
    ...userLocationAttributes
  });
}

async function down(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.dropTable(TableNames.UserLocations);
}

export { up, down };
