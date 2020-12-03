import { Sequelize } from 'sequelize';
import {
  typeAttributesBase,
  TypeBase,
  TypeBaseAtributes,
  TypeBaseCreationAttributes
} from './TypeBase';

export interface ComponentTypeAtributes extends TypeBaseAtributes {}

export interface ComponentTypeCreationAttributes
  extends TypeBaseCreationAttributes {}

export class ComponentType
  extends TypeBase<ComponentTypeAtributes, ComponentTypeCreationAttributes>
  implements ComponentTypeAtributes {
  static modelName = 'componentType';
  static tableName = 'component_type';
}

export function initialize(sequelize: Sequelize) {
  ComponentType.init(typeAttributesBase, {
    sequelize,
    modelName: ComponentType.modelName,
    tableName: ComponentType.tableName,
    timestamps: false
  });

  return ComponentType;
}
