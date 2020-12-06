import { DataTypes, QueryInterface, Sequelize } from 'sequelize';
import { Building, Component, ComponentType } from '../models';

export async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  queryInterface.createTable(Component.tableName, {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    buildingId: {
      type: DataTypes.INTEGER,
      field: 'building_id',
      allowNull: false,
      references: {
        model: Building.tableName,
        key: 'id'
      }
    },
    componentTypeId: {
      type: DataTypes.INTEGER,
      field: 'component_type_id',
      allowNull: false,
      references: {
        model: ComponentType.tableName,
        key: 'id'
      }
    },
    name: { type: DataTypes.STRING, allowNull: false },
    cost: { type: DataTypes.DECIMAL },
    location: { type: DataTypes.STRING },
    imageUrl: { type: DataTypes.STRING, field: 'image_url' },
    description: { type: DataTypes.STRING(500) }
  });
}

export async function down(
  queryInterface: QueryInterface,
  Sequelize: Sequelize
) {
  await queryInterface.dropTable(Component.tableName);
}
