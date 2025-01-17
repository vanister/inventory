import {
  DataTypes,
  Model,
  ModelAttributes,
  Optional,
  Sequelize
} from 'sequelize';
import { Location } from './Location.js';
import { UserProfile } from './UserProfile.js';

export interface UserLocationsAtributes {
  id: number;
  userProfileId: number;
  locationId: number;
}

export interface UserLocationsCreationAttributes
  extends Optional<UserLocationsAtributes, 'id'> {}

export class UserLocations
  extends Model<UserLocationsAtributes, UserLocationsCreationAttributes>
  implements UserLocationsAtributes {
  static readonly modelName = 'userLocations';
  static readonly tableName = 'user_locations';

  id!: number;
  userProfileId!: number;
  locationId!: number;

  locations?: Location[];
  userProfiles?: UserProfile[];

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
        field: 'user_profile_id',
        references: {
          // UserProfile is a Sequelize.Model, but the typings for
          // references.model doesn't correctly validate it :shrug:
          model: UserProfile as any,
          key: 'id'
        }
      },
      locationId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'location_id',
        // Location is a Sequelize.Model, but the typings for
        // references.model doesn't correctly validate it :shrug:
        references: {
          model: Location as any,
          key: 'id'
        }
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
