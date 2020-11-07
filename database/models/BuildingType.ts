import { Sequelize } from 'sequelize';
import {
  typeAttributesBase,
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
  implements BuildingTypeAtributes {
  static modelName = 'buildingType';
  static tableName = 'building_type'
}

export function initialize(
  sequelize: Sequelize,
  associations?: BuildingTypeAssociations
) {
  BuildingType.init(typeAttributesBase, {
    sequelize,
    tableName: BuildingType.tableName,
    timestamps: false
  });

  return BuildingType;
}
