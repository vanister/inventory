import { Sequelize } from 'sequelize';
import { TableNames } from './table-names';
import {
  attributesBase,
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
  implements LocationTypeAtributes {}

export function initialize(
  sequelize: Sequelize,
  associations?: LocationTypeAssociations
) {
  LocationType.init(attributesBase, {
    sequelize,
    tableName: TableNames.LocationTypes,
    timestamps: false
  });

  return LocationType;
}
