import { PostgresContext } from './postgres.context';

type TestRecord = { name: string; value: number };

describe('PostgresContext', () => {
  const mockDb = {
    end: jest.fn().mockResolvedValue(undefined),
    query: jest.fn().mockResolvedValue([])
  };

  let context: PostgresContext;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    context = new PostgresContext(mockDb as any);
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
      jest.spyOn(context, 'connectionClosed', 'get').mockReturnValueOnce(true);

      await context.close();

      expect(mockDb.end).not.toHaveBeenCalled();
    });
  });

  describe('WHEN querying for data', () => {
    test('should return a collection of rows', async () => {
      const sql = 'select * from table';
      const data = {
        rows: [
          { name: 'test-42', value: 42 },
          { name: 'test-142', value: 142 }
        ]
      };

      mockDb.query.mockResolvedValueOnce(data);

      const rows = await context.query<TestRecord>(sql);

      expect(rows).toEqual(data.rows);
      expect(mockDb.query).toHaveBeenCalledWith(sql, []);
    });
  });
});
