import { UserProfile } from '../../models/user-profile';

export async function handler({ id }): Promise<UserProfile> {
  return {
    id,
    description: 'returned from get handler'
  };
}
