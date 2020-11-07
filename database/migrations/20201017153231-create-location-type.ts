import { QueryInterface, Sequelize } from 'sequelize';
import { typeAttributesBase } from '../models/TypeBase';
import { LocationType } from '../models/LocationType';

async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.createTable(LocationType.tableName, {
    ...typeAttributesBase
  });
}

async function down(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.dropTable(LocationType.tableName);
}

export { up, down };
