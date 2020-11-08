import { DataTypes, Model, ModelAttributes, Sequelize } from 'sequelize';

export interface UserLocationsAtributes {
  id: number;
  userId: string;
  locationId: number;
}

export interface UserLocationsAssociations {}

export class UserLocations
  extends Model<UserLocationsAtributes>
  implements UserLocationsAtributes {
  static modelName = 'userLocations';
  static tableName = 'user_locations';

  id!: number;
  userId!: string;
  locationId!: number;
}

export const userLocationAttributes: ModelAttributes<UserLocations> = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  userProfileId: {
    allowNull: false,
    type: DataTypes.UUID,
    field: 'user_profile_id'
  },
  locationId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'location_id'
  }
};

export function initialize(
  sequelize: Sequelize,
  associations?: UserLocationsAssociations
) {
  UserLocations.init(userLocationAttributes, {
    sequelize,
    tableName: UserLocations.tableName,
    timestamps: false
  });

  return UserLocations;
}
