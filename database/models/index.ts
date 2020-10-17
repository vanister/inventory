import 'dotenv/config';

import { Sequelize } from 'sequelize';
import { initLocationType } from './LocationType';
import { TableNames } from './table-names';

const { INV_DB, INV_DB_UN, INV_DB_PW, INV_DB_HOST } = process.env;

const dbcontext = new Sequelize({
  dialect: 'postgres',
  database: INV_DB,
  username: INV_DB_UN,
  password: INV_DB_PW,
  host: INV_DB_HOST
});

const LocationType = initLocationType(dbcontext);

export { dbcontext, LocationType, TableNames };
