import {  QueryInterface, Sequelize } from 'sequelize';
import { Location } from '../models/Location';
import { LocationType } from '../models/LocationType';

const constraintName = 'fk_location_location_type';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.addConstraint(Location.tableName, {
      fields: ['location_type_id'],
      type: 'foreign key',
      name: constraintName,
      references: {
        table: LocationType.tableName,
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },
  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.removeConstraint(Location.tableName, constraintName);
  }
};
