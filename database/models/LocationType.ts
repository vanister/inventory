import { Sequelize } from 'sequelize';
import { Location } from './Location';
import {
  typeAttributesBase,
  TypeBase,
  TypeBaseAtributes,
  TypeBaseCreationAttributes
} from './TypeBase';

export interface LocationTypeAtributes extends TypeBaseAtributes {}

export interface LocationTypeCreationAttributes
  extends TypeBaseCreationAttributes {}

export interface LocationTypeAssociations {}

export class LocationType
  extends TypeBase<LocationTypeAtributes, LocationTypeCreationAttributes>
  implements LocationTypeAtributes {
  static modelName = 'locationType';
  static tableName = 'location_type'
}

// set up associations
LocationType.hasMany(Location);

export function initialize(
  sequelize: Sequelize,
) {
  LocationType.init(typeAttributesBase, {
    sequelize,
    tableName: LocationType.tableName,
    timestamps: false
  });

  return LocationType;
}
