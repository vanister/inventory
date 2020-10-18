import { Sequelize } from 'sequelize';
import { TableNames } from './table-names';
import {
  attributesBase,
  TypeBase,
  TypeBaseAtributes,
  TypeBaseCreationAttributes
} from './TypeBase';

export interface BuildingTypeAtributes extends TypeBaseAtributes {}

export interface BuildingTypeCreationAttributes
  extends TypeBaseCreationAttributes {}

export interface BuildingTypeAssociations {}

export class BuildingType
  extends TypeBase<BuildingTypeAtributes, BuildingTypeCreationAttributes>
  implements BuildingTypeAtributes {}

export function initialize(
  sequelize: Sequelize,
  associations?: BuildingTypeAssociations
) {
  BuildingType.init(attributesBase, {
    sequelize,
    tableName: TableNames.BuildingTypes,
    timestamps: false
  });

  return BuildingType;
}
