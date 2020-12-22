import { Pool } from 'pg';
import { PostgresContext } from './postgres.context';

describe('PostgresContext', () => {
  const mockDb: Partial<Pool> = {
    end: jest.fn().mockResolvedValue(undefined)
  };

  let context: PostgresContext;

  beforeEach(() => {
   jest.clearAllMocks();
   jest.restoreAllMocks();
  })

  beforeEach(() => {
    context = new PostgresContext(mockDb as Pool);
  });

  test('should create a new instance', () => {
    expect(context).toBeDefined();
  });

  describe('WHEN closing a connection', () => {
    test('should end the pg pool', async () => {
      await context.close();

      expect(mockDb.end).toHaveBeenCalled();
    });

    test('should not call "end" if connection is already closed', async () => {
      jest.spyOn(context, 'connectionClosed', 'get').mockReturnValueOnce(true)

      await context.close();

      expect(mockDb.end).not.toHaveBeenCalled();
    });
  });
});
