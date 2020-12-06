import { DataTypes, QueryInterface, Sequelize } from 'sequelize';
import { UserProfile } from '../models';

export async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  queryInterface.createTable(UserProfile.tableName, {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name',
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name',
      allowNull: false
    },
    email: { type: DataTypes.STRING, allowNull: false },
    externalId: {
      type: DataTypes.UUID,
      field: 'external_id',
      comment: 'external sso key'
    },
    phoneNumber: { type: DataTypes.STRING, field: 'phone_number' }
  });
}

export async function down(
  queryInterface: QueryInterface,
  Sequelize: Sequelize
) {
  await queryInterface.dropTable(UserProfile.tableName);
}
