import { DataTypes, QueryInterface, Sequelize } from 'sequelize';
import { Location, LocationType } from '../models';

export async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  queryInterface.createTable(Location.tableName, {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    locationTypeId: {
      type: DataTypes.INTEGER,
      field: 'location_type_id',
      allowNull: false,
      references: {
        model: LocationType.tableName,
        key: 'id'
      }
    },
    name: { type: DataTypes.STRING, allowNull: false },
    coord: { type: DataTypes.STRING },
    notes: { type: DataTypes.STRING },
    imageUrl: { type: DataTypes.STRING, field: 'image_url' },
    description: { type: DataTypes.STRING(500) }
  });
}

export async function down(
  queryInterface: QueryInterface,
  Sequelize: Sequelize
) {
  await queryInterface.dropTable(Location.tableName);
}
