import { DataTypes, QueryInterface, Sequelize } from 'sequelize';
import { Location, UserLocations, UserProfile } from '../models';

export async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  queryInterface.createTable(UserLocations.tableName, {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    userProfileId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_profile_id',
      references: {
        model: UserProfile.tableName,
        key: 'id'
      }
    },
    locationId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'location_id',
      references: {
        model: Location.tableName,
        key: 'id'
      }
    }
  });
}

export async function down(
  queryInterface: QueryInterface,
  Sequelize: Sequelize
) {
  await queryInterface.dropTable(UserLocations.tableName);
}
