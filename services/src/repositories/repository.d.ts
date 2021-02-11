import { DbContext } from '../db/context';

export interface Repository<TModel> {
  list(top?: number): Promise<TModel[]>;
  get(id: number): Promise<TModel>;
  add(model: TModel): Promise<TModel>;
  update(model: TModel): Promise<TModel>;
  remove(id: number): Promise<void>;
}
