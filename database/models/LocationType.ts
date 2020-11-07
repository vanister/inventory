import { Sequelize } from 'sequelize';
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

export function initialize(
  sequelize: Sequelize,
  associations?: LocationTypeAssociations
) {
  LocationType.init(typeAttributesBase, {
    sequelize,
    tableName: LocationType.tableName,
    timestamps: false
  });

  return LocationType;
}
