import {
  DataTypes,
  Model,
  ModelAttributes,
  Optional,
  Sequelize
} from 'sequelize';

export interface ComponentAttributes {
  id: number;
  buildingId: number;
  componentTypeId: number;
  name: string;
  cost?: number;
  location?: string;
  imageUrl?: string;
  description?: string;
}

export interface ComponentCreationAttributes
  extends Optional<
    ComponentAttributes,
    'id' | 'cost' | 'location' | 'imageUrl' | 'description'
  > {}

export class Component
  extends Model<ComponentAttributes, ComponentCreationAttributes>
  implements ComponentAttributes {
  static modelName = 'component';
  static tableName = 'component';

  id!: number;
  buildingId!: number;
  componentTypeId!: number;
  name!: string;
  cost!: number;
  location!: string;
  imageUrl!: string;
  description!: string;
}

export const attributes: ModelAttributes<Component> = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  buildingId: {
    type: DataTypes.INTEGER,
    field: 'building_id',
    allowNull: false
  },
  componentTypeId: {
    type: DataTypes.INTEGER,
    field: 'component_type_id',
    allowNull: false
  },
  name: { type: DataTypes.STRING, allowNull: false },
  cost: { type: DataTypes.DECIMAL },
  location: { type: DataTypes.STRING },
  imageUrl: { type: DataTypes.STRING, field: 'image_url' },
  description: { type: DataTypes.STRING(500) }
};

export function initialize(sequelize: Sequelize) {
  Component.init(attributes, {
    sequelize,
    modelName: Component.modelName,
    tableName: Component.tableName,
    timestamps: false
  });

  return Component;
}