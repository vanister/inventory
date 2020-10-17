import { Model, Optional } from 'sequelize';

export interface LocationTypeAtributes {
  id: number;
  name: string;
  description?: string | null;
}

export interface LocationTypeCreationAttributes
  extends Optional<LocationTypeAtributes, 'id' | 'description'> {}

export class LocationType
  extends Model<LocationTypeAtributes, LocationTypeCreationAttributes>
  implements LocationTypeAtributes {
  public id!: number;
  public name!: string;
  public description!: string | null;
}
