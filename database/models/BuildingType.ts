import { Model, ModelAttributes, ModelStatic, Sequelize } from 'sequelize';
import {
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

  static initialize(sequelize: Sequelize, attributes: ModelAttributes) {
    BuildingType.init(attributes, {
      sequelize,
      modelName: BuildingType.modelName,
      tableName: BuildingType.tableName,
      timestamps: false
    });
  }

  /** Sets the association for this model.  All models must be `initialize`'d first. */
  static setAssociations({ Building }: { Building: ModelStatic<Model> }) {
    BuildingType.hasMany(Building);
  }
}
