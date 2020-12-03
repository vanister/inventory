import { QueryInterface, Sequelize } from 'sequelize';
import { Component } from '../models/Component';
import { ComponentType } from '../models/ComponentType';

const constraintName = 'fk_component_component_type';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.addConstraint(Component.tableName, {
      fields: ['component_type_id'],
      type: 'foreign key',
      name: constraintName,
      references: {
        table: ComponentType.tableName,
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },
  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.removeConstraint(Component.tableName, constraintName);
  }
};
