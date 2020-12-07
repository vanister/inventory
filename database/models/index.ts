import { Sequelize } from 'sequelize';

import { typeAttributesBase } from './TypeBase';
import { Building } from './Building';
import { BuildingType } from './BuildingType';
import { Component } from './Component';
import { ComponentType } from './ComponentType';
import { Location } from './Location';
import { LocationType } from './LocationType';
import { UserLocations } from './UserLocations';
import { UserProfile } from './UserProfile';

export function initialize(sequelize: Sequelize) {
  // initalize the models
  Building.initModel(sequelize);
  BuildingType.initModel(sequelize, typeAttributesBase);
  Component.initModel(sequelize);
  ComponentType.initModel(sequelize, typeAttributesBase);
  Location.initModel(sequelize);
  LocationType.initModel(sequelize, typeAttributesBase);
  UserLocations.initModel(sequelize);
  UserProfile.initModel(sequelize);

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
