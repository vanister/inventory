import {
  Sequelize,
  Model,
  DataTypes,
  Optional
} from 'sequelize';
import { TableNames } from './table-names';

export interface LocationTypeAtributes {
  id: number;
  name: string;
  description?: string | null;
}

export interface LocationTypeCreationAttributes
  extends Optional<LocationTypeAtributes, 'id' | 'description'> {}

export class LocationType
  extends Model<LocationTypeAtributes, LocationTypeCreationAttributes>
  implements LocationTypeAtributes {
  public id!: number;
  public name!: string;
  public description!: string | null;
}

export function initLocationType(
  sequelize: Sequelize,
  associations?: { [name: string]: Model }
) {
  LocationType.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(1000)
      }
    },
    {
      sequelize,
      tableName: TableNames.LocationTypes
    }
  );

  return LocationType;
}
