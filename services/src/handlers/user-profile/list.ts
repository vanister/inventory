import { UserProfile } from '../../models/user-profile';

export async function handler(): Promise<UserProfile[]> {
  return [{ id: 42, description: 'hardcoded' }];
}
