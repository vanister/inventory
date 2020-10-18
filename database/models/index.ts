import 'dotenv/config';

import { Sequelize } from 'sequelize';
import { initialize as initBuildingType } from './BuildingType';
import { initialize as initLocationType } from './LocationType';
import { initialize as initComponentType } from './ComponentType';
import { TableNames } from './table-names';

const { INV_DB, INV_DB_UN, INV_DB_PW, INV_DB_HOST } = process.env;

const dbcontext = new Sequelize({
  dialect: 'postgres',
  database: INV_DB,
  username: INV_DB_UN,
  password: INV_DB_PW,
  host: INV_DB_HOST
});

// list models here
const BuildingType = initBuildingType(dbcontext);
const ComponentType = initComponentType(dbcontext);
const LocationType = initLocationType(dbcontext);

export {
  dbcontext,
  // enums and types
  TableNames,
  // models
  BuildingType,
  ComponentType,
  LocationType
};
