import { Model, ModelAttributes, ModelStatic, Sequelize } from 'sequelize';
import { Building } from './Building.js';
import {
  TypeBase,
  TypeBaseAtributes,
  TypeBaseCreationAttributes
} from './TypeBase.js';

export interface BuildingTypeAtributes extends TypeBaseAtributes {}

export interface BuildingTypeCreationAttributes
  extends TypeBaseCreationAttributes {}

export class BuildingType
  extends TypeBase<BuildingTypeAtributes, BuildingTypeCreationAttributes>
  implements BuildingTypeAtributes {
  static readonly modelName = 'buildingType';
  static readonly tableName = 'building_type';

  buildings?: Building[];

  static initModel(sequelize: Sequelize, attributes: ModelAttributes) {
    BuildingType.init(attributes, {
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
