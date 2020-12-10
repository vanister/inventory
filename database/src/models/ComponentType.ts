import { Model, ModelAttributes, ModelStatic, Sequelize } from 'sequelize';
import { Component } from './Component.js';
import {
  TypeBase,
  TypeBaseAtributes,
  TypeBaseCreationAttributes
} from './TypeBase.js';

export interface ComponentTypeAtributes extends TypeBaseAtributes {}

export interface ComponentTypeCreationAttributes
  extends TypeBaseCreationAttributes {}

export class ComponentType
  extends TypeBase<ComponentTypeAtributes, ComponentTypeCreationAttributes>
  implements ComponentTypeAtributes {
  static readonly modelName = 'componentType';
  static readonly tableName = 'component_type';

  components?: Component[];

  static initModel(sequelize: Sequelize, attributes: ModelAttributes) {
    ComponentType.init(attributes, {
      sequelize,
      modelName: ComponentType.modelName,
      tableName: ComponentType.tableName,
      timestamps: false
    });
  }

  static setAssociations({ Component }: { Component: ModelStatic<Model> }) {
    ComponentType.hasMany(Component);
  }
}
