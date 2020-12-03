import { QueryInterface, Sequelize } from 'sequelize';
import { Building } from '../models/Building';
import { BuildingType } from '../models/BuildingType';

const constraintName = 'fk_building_building_type';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.addConstraint(Building.tableName, {
      fields: ['building_type_id'],
      type: 'foreign key',
      name: constraintName,
      references: {
        table: BuildingType.tableName,
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },
  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.removeConstraint(Building.tableName, constraintName);
  }
};
