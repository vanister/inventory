import { QueryInterface, Sequelize } from 'sequelize';
import {
  attributes as userLocationAttributes,
  UserLocations
} from '../models/UserLocations';
import {
  attributes as userProfileAttributes,
  UserProfile
} from '../models/UserProfile';

async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.createTable(UserLocations.tableName, {
    ...userLocationAttributes
  });

  await queryInterface.createTable(UserProfile.tableName, {
    ...userProfileAttributes
  });
}

async function down(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.dropTable(UserLocations.tableName);
  await queryInterface.dropTable(UserProfile.tableName);
}

export { up, down };
