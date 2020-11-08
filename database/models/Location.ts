import {
  DataTypes,
  Model,
  ModelAttributes,
  Optional,
  Sequelize
} from 'sequelize';

export interface LocationAttributes {
  id: number;
  locationTypeId: number;
  name: string;
  coord?: any; // type this
  notes?: string;
  imageUrl?: string;
  description?: string;
}

export interface LocationCreationAttributes
  extends Optional<
    LocationAttributes,
    'id' | 'coord' | 'notes' | 'imageUrl' | 'description'
  > {}

export interface LocationAssociations {}

export class Location
  extends Model<LocationAttributes, LocationCreationAttributes>
  implements LocationAttributes {
  static modelName = 'location';
  static tableName = 'location';

  id!: number;
  locationTypeId!: number;
  name!: string;
  coord!: any;
  notes!: string;
  imageUrl!: string;
  description!: string;
}

export const attributes: ModelAttributes<Location> = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  locationTypeId: {
    type: DataTypes.INTEGER,
    field: 'location_type_id',
    allowNull: false
  },
  name: { type: DataTypes.STRING, allowNull: false },
  coord: { type: DataTypes.STRING },
  notes: { type: DataTypes.STRING },
  imageUrl: { type: DataTypes.STRING, field: 'image_url' },
  description: { type: DataTypes.STRING(500) }
};

export function initialize(
  sequelize: Sequelize,
  associations?: LocationAssociations
) {
  Location.init(attributes, {
    sequelize,
    tableName: Location.tableName,
    timestamps: false
  });

  return Location;
}
