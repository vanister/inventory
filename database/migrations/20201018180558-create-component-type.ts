import { QueryInterface, Sequelize } from 'sequelize';
import { typeAttributesBase } from '../models/TypeBase';
import { ComponentType } from '../models/ComponentType';

async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.createTable(ComponentType.tableName, {
    ...typeAttributesBase
  });
}

async function down(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.dropTable(ComponentType.tableName);
}

export { up, down };
