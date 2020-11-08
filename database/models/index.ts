import 'dotenv/config';

import { Sequelize } from 'sequelize';

import { initialize as initBuildingType } from './BuildingType';
import { initialize as initLocationType } from './LocationType';
import { initialize as initComponentType } from './ComponentType';
import { initialize as initUserLocations } from './UserLocations';
import { initialize as initUserProfile } from './UserProfile';
import { initialize as initLocation } from './Location';
import { initialize as initBuilding } from './Building';

const { INV_DB, INV_DB_UN, INV_DB_PW, INV_DB_HOST, INV_DB_PORT } = process.env;

const dbcontext = new Sequelize({
  dialect: 'postgres',
  database: INV_DB,
  username: INV_DB_UN,
  password: INV_DB_PW,
  host: INV_DB_HOST,
  port: +INV_DB_PORT
});

// list models here
// types
const BuildingType = initBuildingType(dbcontext);
const ComponentType = initComponentType(dbcontext);
const LocationType = initLocationType(dbcontext);
// tables
const UserLocations = initUserLocations(dbcontext);
const UserProfile = initUserProfile(dbcontext);
const Location = initLocation(dbcontext);
const Building = initBuilding(dbcontext);

export {
  dbcontext,
  // models
  BuildingType,
  ComponentType,
  LocationType,
  UserLocations,
  UserProfile,
  Location,
  Building
};
