import { Sequelize } from 'sequelize';
import { TableNames } from './table-names';
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
}

export function initialize(
  sequelize: Sequelize,
  associations?: LocationTypeAssociations
) {
  LocationType.init(typeAttributesBase, {
    sequelize,
    tableName: TableNames.LocationTypes,
    timestamps: false
  });

  return LocationType;
}
