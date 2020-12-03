import {
  DataTypes,
  Model,
  ModelAttributes,
  Optional,
  Sequelize
} from 'sequelize';

export interface BuildingAttributes {
  id: number;
  locationId: number;
  buildingTypeId: number;
  name: string;
  address: string;
  coord?: any; // type this
  imageUrl?: string;
  description?: string;
}

export interface BuildingCreationAttributes
  extends Optional<
    BuildingAttributes,
    'id' | 'coord' | 'imageUrl' | 'description'
  > {}

export class Building
  extends Model<BuildingAttributes, BuildingCreationAttributes>
  implements BuildingAttributes {
  static modelName = 'building';
  static tableName = 'building';

  id!: number;
  locationId!: number;
  buildingTypeId!: number;
  name!: string;
  address!: string;
  coord!: any;
  imageUrl!: string;
  description!: string;
}

export const attributes: ModelAttributes<Building> = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  locationId: {
    type: DataTypes.INTEGER,
    field: 'location_id',
    allowNull: false
  },
  buildingTypeId: {
    type: DataTypes.INTEGER,
    field: 'building_type_id',
    allowNull: false
  },
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  coord: { type: DataTypes.STRING },
  imageUrl: { type: DataTypes.STRING, field: 'image_url' },
  description: { type: DataTypes.STRING(500) }
};

export function initialize(
  sequelize: Sequelize
) {
  Building.init(attributes, {
    sequelize,
    modelName: Building.modelName,
    tableName: Building.tableName,
    timestamps: false
  });

  return Building;
}
