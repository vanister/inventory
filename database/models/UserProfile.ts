import {
  DataTypes,
  Model,
  ModelAttributes,
  Optional,
  Sequelize
} from 'sequelize';

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

export interface UserProfileAssociations {}

export class UserProfile
  extends Model<UserProfileAttributes, UserProfileCreationAttributes>
  implements UserProfileAttributes {
    
  static modelName = 'userProfile';
  static tableName = 'user_profile';

  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  externalId!: string;
  phoneNumber!: string;
}

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

export function initialize(
  sequelize: Sequelize,
  associations?: UserProfileAssociations
) {
  UserProfile.init(attributes, {
    sequelize,
    tableName: UserProfile.tableName,
    timestamps: false
  });

  return UserProfile;
}
