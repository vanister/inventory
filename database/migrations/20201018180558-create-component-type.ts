import { TableNames } from '../models';
import { typeAttributesBase } from '../models/TypeBase';
import { QueryInterface, Sequelize } from 'sequelize';

async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.createTable(TableNames.ComponentTypes, {
    ...typeAttributesBase
  });
}

async function down(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.dropTable(TableNames.ComponentTypes);
}

export { up, down };
