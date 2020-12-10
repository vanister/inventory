import { DataTypes, QueryInterface, Sequelize } from 'sequelize';
import { BuildingType } from '../models/index.js';

// Migrations are independent of models

export async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  queryInterface.createTable(BuildingType.tableName, {
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
  queryInterface.dropTable(BuildingType.tableName);
}
