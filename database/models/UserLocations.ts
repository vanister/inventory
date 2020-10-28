import { DataTypes, Model, Sequelize } from 'sequelize';
import { TableNames } from './table-names';

export interface UserLocationsAtributes {
  id: number;
  userId: string;
  locationId: number;
}

export interface UserLocationsAssociations {}

export class UserLocations
  extends Model<UserLocationsAtributes>
  implements UserLocationsAtributes {
  id!: number;
  userId!: string;
  locationId!: number;
}

export function initialize(
  sequelize: Sequelize,
  associations?: UserLocationsAssociations
) {
  UserLocations.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
        field: 'user_id'
      },
      locationId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'location_id'
      }
    },
    {
      sequelize,
      tableName: TableNames.LocationTypes,
      timestamps: false
    }
  );

  return UserLocations;
}
