import { DbContext } from '../db/context';
import { UserProfile } from '../models/user-profile';
import { Repository } from './repository';

export class UserProfileRepository implements Repository<UserProfile> {
  constructor(private context: DbContext) {}

  public async list(): Promise<UserProfile[]> {
    throw new Error('not implemented');
  }

  public async get(id: number): Promise<UserProfile> {
    throw new Error('not implemented');
  }

  public async add(userProfile: UserProfile): Promise<UserProfile> {
    throw new Error('not implemented');
  }

  public async update(userProfile: UserProfile): Promise<UserProfile> {
    throw new Error('not implemented');
  }

  public async remove(id: number): Promise<void> {
    throw new Error('not implemented');
  }
}
