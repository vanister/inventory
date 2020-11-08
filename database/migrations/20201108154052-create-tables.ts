import { QueryInterface, Sequelize } from 'sequelize';
import {
  attributes as userLocationAttributes,
  UserLocations
} from '../models/UserLocations';
import {
  attributes as userProfileAttributes,
  UserProfile
} from '../models/UserProfile';
import { attributes as locationAttributes, Location } from '../models/Location';

async function up(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.createTable(UserLocations.tableName, {
    ...userLocationAttributes
  });

  await queryInterface.createTable(UserProfile.tableName, {
    ...userProfileAttributes
  });

  await queryInterface.createTable(Location.tableName, {
    ...locationAttributes
  });
}

async function down(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.dropTable(UserLocations.tableName);
  await queryInterface.dropTable(UserProfile.tableName);
  await queryInterface.dropTable(Location.tableName);
}

export { up, down };
