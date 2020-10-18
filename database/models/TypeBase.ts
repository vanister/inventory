import { DataTypes, Model, ModelAttributes, Optional } from 'sequelize';

export interface TypeBaseAtributes {
  id: number;
  name: string;
  description?: string | null;
}

export interface TypeBaseCreationAttributes
  extends Optional<TypeBaseAtributes, 'id' | 'description'> {}

export abstract class TypeBase<TBaseAttributes, TBaseCreationAttributes>
  extends Model<TBaseAttributes, TBaseCreationAttributes>
  implements TypeBaseAtributes {
  public id!: number;
  public name!: string;
  public description!: string | null;
}

export const attributesBase: ModelAttributes<
  TypeBase<TypeBaseAtributes, TypeBaseCreationAttributes>,
  TypeBaseAtributes
> = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(1000)
  }
};
