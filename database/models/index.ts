import 'dotenv/config';

import { Sequelize } from 'sequelize';

import { Building, attributes as buildingAttributes } from './Building';
import { BuildingType } from './BuildingType';

import { typeAttributesBase } from './TypeBase';

import { Component, attributes as componentAttributes } from './Component';
import { ComponentType } from './ComponentType';
import { Location, attributes as locationAttributes } from './Location';
import { LocationType } from './LocationType';

const { INV_DB, INV_DB_UN, INV_DB_PW, INV_DB_HOST, INV_DB_PORT } = process.env;

const dbcontext = new Sequelize({
  dialect: 'postgres',
  database: INV_DB,
  username: INV_DB_UN,
  password: INV_DB_PW,
  host: INV_DB_HOST,
  port: +INV_DB_PORT
});

// initalize the model
Building.initModel(dbcontext, buildingAttributes);
BuildingType.initialize(dbcontext, typeAttributesBase);
Component.initialize(dbcontext, componentAttributes);
ComponentType.initialize(dbcontext, typeAttributesBase);
Location.initialize(dbcontext, locationAttributes);
LocationType.initialize(dbcontext, typeAttributesBase);

// set associations
Building.setAssociations({ BuildingType });
BuildingType.setAssociations({ Building });
Component.setAssociations({ ComponentType });
ComponentType.setAssociations({ Component });
Location.setAssociations({ LocationType });
LocationType.setAssociations({ Location });

export {
  dbcontext,
  // models
  Component,
  ComponentType,
  Location,
  LocationType
};
