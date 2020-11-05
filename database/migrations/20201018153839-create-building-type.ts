import { TableNames } from '../models';
import { typeAttributesBase } from '../models/TypeBase';
import { QueryInterface, Sequelize } from 'sequelize';

async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.createTable(TableNames.BuildingTypes, {
    ...typeAttributesBase
  });
}

async function down(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.dropTable(TableNames.BuildingTypes);
}

export { up, down };
