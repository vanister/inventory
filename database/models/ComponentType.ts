import { Sequelize } from 'sequelize';
import { TableNames } from './table-names';
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
  implements ComponentTypeAtributes {}

export function initialize(
  sequelize: Sequelize,
  associations?: ComponentTypeAssociations
) {
  ComponentType.init(typeAttributesBase, {
    sequelize,
    tableName: TableNames.ComponentTypes,
    timestamps: false
  });

  return ComponentType;
}
