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

export interface ComponentTypeAssociations {}

export class ComponentType
  extends TypeBase<ComponentTypeAtributes, ComponentTypeCreationAttributes>
  implements ComponentTypeAtributes {
  static modelName = 'componentType';
  static tableName = 'component_type'
}

export function initialize(
  sequelize: Sequelize,
  associations?: ComponentTypeAssociations
) {
  ComponentType.init(typeAttributesBase, {
    sequelize,
    tableName: ComponentType.tableName,
    timestamps: false
  });

  return ComponentType;
}
