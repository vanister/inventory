import { QueryInterface, Sequelize } from 'sequelize';
import { typeAttributesBase } from '../models/TypeBase';
import { LocationType } from '../models/LocationType';
import { BuildingType } from '../models/BuildingType';
import { ComponentType } from '../models/ComponentType';

async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.createTable(LocationType.tableName, {
    ...typeAttributesBase
  });

  await queryInterface.createTable(BuildingType.tableName, {
    ...typeAttributesBase
  });

  await queryInterface.createTable(ComponentType.tableName, {
    ...typeAttributesBase
  });
}

async function down(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.dropTable(LocationType.tableName);
  await queryInterface.dropTable(BuildingType.tableName);
  await queryInterface.dropTable(ComponentType.tableName);
}

export { up, down };
