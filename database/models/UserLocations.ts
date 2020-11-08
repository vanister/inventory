import { DataTypes, Model, ModelAttributes, Sequelize } from 'sequelize';

export interface UserLocationsAtributes {
  id: number;
  userProfileId: number;
  locationId: number;
}

export interface UserLocationsAssociations {}

export class UserLocations
  extends Model<UserLocationsAtributes>
  implements UserLocationsAtributes {
    
  static modelName = 'userLocations';
  static tableName = 'user_locations';

  id!: number;
  userProfileId!: number;
  locationId!: number;
}

export const attributes: ModelAttributes<UserLocations> = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  userProfileId: {
    allowNull: false,
    type: DataTypes.INTEGER,
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
  UserLocations.init(attributes, {
    sequelize,
    tableName: UserLocations.tableName,
    timestamps: false
  });

  return UserLocations;
}
