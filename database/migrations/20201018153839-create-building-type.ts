import { QueryInterface, Sequelize } from 'sequelize';
import { typeAttributesBase } from '../models/TypeBase';
import { BuildingType } from '../models/BuildingType';

async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.createTable(BuildingType.tableName, {
    ...typeAttributesBase
  });
}

async function down(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.dropTable(BuildingType.tableName);
}

export { up, down };
