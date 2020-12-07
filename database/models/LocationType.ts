import { Model, ModelAttributes, ModelStatic, Sequelize } from 'sequelize';
import { Location } from './Location';
import {
  TypeBase,
  TypeBaseAtributes,
  TypeBaseCreationAttributes
} from './TypeBase';

export interface LocationTypeAtributes extends TypeBaseAtributes {}

export interface LocationTypeCreationAttributes
  extends TypeBaseCreationAttributes {}

export class LocationType
  extends TypeBase<LocationTypeAtributes, LocationTypeCreationAttributes>
  implements LocationTypeAtributes {
  static readonly modelName = 'locationType';
  static readonly tableName = 'location_type';

  locations?: Location[];

  static initModel(sequelize: Sequelize, attributes: ModelAttributes) {
    LocationType.init(attributes, {
      sequelize,
      modelName: LocationType.modelName,
      tableName: LocationType.tableName,
      timestamps: false
    });
  }

  static setAssociations({ Location }: { Location: ModelStatic<Model> }) {
    LocationType.hasMany(Location);
  }
}
