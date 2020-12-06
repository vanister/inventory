import {
  Association,
  DataTypes,
  Model,
  ModelAttributes,
  ModelStatic,
  Optional,
  Sequelize
} from 'sequelize';
import { UserLocations } from './UserLocations';

export interface UserProfileAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  externalId?: string;
  phoneNumber?: string;
}

export interface UserProfileCreationAttributes
  extends Optional<
    UserProfileAttributes,
    'id' | 'externalId' | 'phoneNumber'
  > {}

export const attributes: ModelAttributes<UserProfile> = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  firstName: { type: DataTypes.STRING, field: 'first_name', allowNull: false },
  lastName: { type: DataTypes.STRING, field: 'last_name', allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  externalId: { type: DataTypes.UUID, field: 'external_id' },
  phoneNumber: { type: DataTypes.STRING, field: 'phone_number' }
};

export class UserProfile
  extends Model<UserProfileAttributes, UserProfileCreationAttributes>
  implements UserProfileAttributes {
  static readonly modelName = 'userProfile';
  static readonly tableName = 'user_profile';

  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  externalId!: string;
  phoneNumber!: string;

  static initialize(sequelize: Sequelize, attributes: ModelAttributes) {
    UserProfile.init(attributes, {
      sequelize,
      modelName: UserProfile.modelName,
      tableName: UserProfile.tableName,
      timestamps: false
    });
  }

  static setAssociations({
    Location,
    UserLocations
  }: {
    [name: string]: ModelStatic<Model>;
  }) {}
}
