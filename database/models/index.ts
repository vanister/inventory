import 'dotenv/config';

import { Sequelize } from 'sequelize';

import { Building, attributes as buildingAttributes } from './Building';
import { BuildingType } from './BuildingType';

import { typeAttributesBase } from './TypeBase';

import { Component, attributes as componentAttributes } from './Component';
import { ComponentType } from './ComponentType';
import { Location, attributes as locationAttributes } from './Location';
import { LocationType } from './LocationType';

export function initialize(sequelize: Sequelize) {
  // initalize the model
  Building.initModel(sequelize, buildingAttributes);
  BuildingType.initModel(sequelize);
  Component.initialize(sequelize, componentAttributes);
  ComponentType.initialize(sequelize, typeAttributesBase);
  Location.initialize(sequelize, locationAttributes);
  LocationType.initialize(sequelize, typeAttributesBase);

  // set associations
  Building.setAssociations({ BuildingType });
  BuildingType.setAssociations({ Building });
  Component.setAssociations({ ComponentType });
  ComponentType.setAssociations({ Component });
  Location.setAssociations({ LocationType });
  LocationType.setAssociations({ Location });
}

export {
  // models
  Component,
  ComponentType,
  Location,
  LocationType
};
