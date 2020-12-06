import { Model, ModelStatic, Sequelize } from 'sequelize';
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
  static tableName = 'building_type';

  static initModel(sequelize: Sequelize) {
    BuildingType.init(typeAttributesBase, {
      sequelize,
      modelName: BuildingType.modelName,
      tableName: BuildingType.tableName,
      timestamps: false
    });
  }

  static setAssociations({ Building }: { Building: ModelStatic<Model> }) {
    BuildingType.hasMany(Building);
  }
}
