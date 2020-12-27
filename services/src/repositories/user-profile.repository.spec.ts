import { mockContext } from '../mocks/dbcontext';
import { UserProfileRepository } from './user-profile.repository';

describe('UserProfileRepository', () => {
  test('should create a repository', () => {
    const repo = new UserProfileRepository(mockContext);

    expect(repo).toBeDefined();
  });
});
