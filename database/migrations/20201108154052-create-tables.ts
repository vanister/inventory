import { QueryInterface, Sequelize } from 'sequelize';

import {
  attributes as userLocationAttributes,
  UserLocations
} from '../models/UserLocations';

import {
  attributes as userProfileAttributes,
  UserProfile
} from '../models/UserProfile';

import {
  attributes as componentAttributes,
  Component
} from '../models/Component';

import { attributes as locationAttributes, Location } from '../models/Location';
import { attributes as buildingAttributes, Building } from '../models/Building';

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

  await queryInterface.createTable(Building.tableName, {
    ...buildingAttributes
  });

  await queryInterface.createTable(Component.tableName, {
    ...componentAttributes
  });
}

async function down(queryInterface: QueryInterface, Sequelize: Sequelize) {
  await queryInterface.dropTable(UserLocations.tableName);
  await queryInterface.dropTable(UserProfile.tableName);
  await queryInterface.dropTable(Location.tableName);
  await queryInterface.dropTable(Building.tableName);
  await queryInterface.dropTable(Component.tableName);
}

export { up, down };
