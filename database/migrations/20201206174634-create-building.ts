import { DataTypes, QueryInterface, Sequelize } from 'sequelize';
import { Building, BuildingType, Location } from '../models';

export async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  queryInterface.createTable(Building.tableName, {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    locationId: {
      type: DataTypes.INTEGER,
      field: 'location_id',
      allowNull: false,
      references: {
        model: Location.tableName,
        key: 'id'
      }
    },
    buildingTypeId: {
      type: DataTypes.INTEGER,
      field: 'building_type_id',
      allowNull: false,
      references: {
        model: BuildingType.tableName,
        key: 'id'
      }
    },
    name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    coord: { type: DataTypes.STRING },
    imageUrl: { type: DataTypes.STRING, field: 'image_url' },
    description: { type: DataTypes.STRING(500) }
  });
}

export async function down(
  queryInterface: QueryInterface,
  Sequelize: Sequelize
) {
  await queryInterface.dropTable(Building.tableName);
}
