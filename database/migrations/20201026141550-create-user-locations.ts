import { QueryInterface, Sequelize } from 'sequelize';
import { userLocationAttributes, UserLocations } from '../models/UserLocations';

async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.createTable(UserLocations.tableName, {
    ...userLocationAttributes
  });
}

async function down(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.dropTable(UserLocations.tableName);
}

export { up, down };
