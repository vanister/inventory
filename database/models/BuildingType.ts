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

export class BuildingType
  extends TypeBase<BuildingTypeAtributes, BuildingTypeCreationAttributes>
  implements BuildingTypeAtributes {
  static modelName = 'buildingType';
  static tableName = 'building_type'
}

export function initialize(
  sequelize: Sequelize
) {
  BuildingType.init(typeAttributesBase, {
    sequelize,
    modelName: BuildingType.modelName,
    tableName: BuildingType.tableName,
    timestamps: false
  });

  return BuildingType;
}
