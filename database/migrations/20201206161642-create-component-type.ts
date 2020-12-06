import { DataTypes, QueryInterface, Sequelize } from 'sequelize';
import { ComponentType } from '../models';

// Migrations are independent of models

export async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  queryInterface.createTable(ComponentType.tableName, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1000)
    }
  });
}

export async function down(
  queryInterface: QueryInterface,
  Sequelize: Sequelize
) {
  queryInterface.dropTable(ComponentType.tableName);
}
