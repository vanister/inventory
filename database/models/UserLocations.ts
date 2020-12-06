import { DataTypes, Model, ModelAttributes, Sequelize } from 'sequelize';

export interface UserLocationsAtributes {
  id: number;
  userProfileId: number;
  locationId: number;
}

export class UserLocations
  extends Model<UserLocationsAtributes>
  implements UserLocationsAtributes {
  static readonly modelName = 'userLocations';
  static readonly tableName = 'user_locations';

  id!: number;
  userProfileId!: number;
  locationId!: number;

  static initModel(sequelize: Sequelize) {
    const attributes: ModelAttributes<UserLocations> = {
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

    UserLocations.init(attributes, {
      sequelize,
      modelName: UserLocations.modelName,
      tableName: UserLocations.tableName,
      timestamps: false
    });
  }
}
