import {
  DataTypes,
  Model,
  ModelAttributes,
  ModelStatic,
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

export class Location
  extends Model<LocationAttributes, LocationCreationAttributes>
  implements LocationAttributes {
  static readonly modelName = 'location';
  static readonly tableName = 'location';

  id!: number;
  locationTypeId!: number;
  name!: string;
  coord!: any;
  notes!: string;
  imageUrl!: string;
  description!: string;

  static initModel(sequelize: Sequelize) {
    const attributes: ModelAttributes<Location> = {
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

    Location.init(attributes, {
      sequelize,
      modelName: Location.modelName,
      tableName: Location.tableName,
      timestamps: false
    });
  }

  static setAssociations({
    LocationType
  }: {
    LocationType: ModelStatic<Model>;
  }) {
    Location.belongsTo(LocationType, { foreignKey: 'location_type_id' });
  }
}
