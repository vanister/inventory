import { Sequelize } from 'sequelize';

import { typeAttributesBase } from './TypeBase.js';
import { Building } from './Building.js';
import { BuildingType } from './BuildingType.js';
import { Component } from './Component.js';
import { ComponentType } from './ComponentType.js';
import { Location } from './Location.js';
import { LocationType } from './LocationType.js';
import { UserLocations } from './UserLocations.js';
import { UserProfile } from './UserProfile.js';

/**
 * Initalizes all of the table models with the given context.
 * @param sequelize The sequelize db context.
 */
export function initialize(sequelize: Sequelize) {
  // initalize the models
  Building.initModel(sequelize);
  BuildingType.initModel(sequelize, typeAttributesBase);
  Component.initModel(sequelize);
  ComponentType.initModel(sequelize, typeAttributesBase);
  Location.initModel(sequelize);
  LocationType.initModel(sequelize, typeAttributesBase);
  UserProfile.initModel(sequelize);
  // order matters, this references Location and UserProfile
  // which needed to be init first
  UserLocations.initModel(sequelize);

  // set associations
  Building.setAssociations({ BuildingType });
  BuildingType.setAssociations({ Building });
  Component.setAssociations({ ComponentType });
  ComponentType.setAssociations({ Component });
  Location.setAssociations({ LocationType, UserLocations, UserProfile });
  LocationType.setAssociations({ Location });
  UserProfile.setAssociations({ Location, UserLocations });
}

export {
  // models
  Building,
  BuildingType,
  Component,
  ComponentType,
  Location,
  LocationType,
  UserLocations,
  UserProfile
};
