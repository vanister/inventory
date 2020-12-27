import { data, TestData } from '../mocks';
import { mockPool, members } from '../mocks/pg';
import { PostgresContext } from './postgres.context';

describe('PostgresContext', () => {
  let context: PostgresContext;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    context = new PostgresContext(mockPool);
  });

  test('should create a new instance', () => {
    expect(context).toBeDefined();
  });

  describe('WHEN closing a connection', () => {
    test('should end the pg pool', async () => {
      await context.close();

      expect(mockPool.end).toHaveBeenCalled();
    });

    test('should not call "end" if connection is already closed', async () => {
      jest.spyOn(context, 'connectionClosed', 'get').mockReturnValueOnce(true);

      await context.close();

      expect(mockPool.end).not.toHaveBeenCalled();
    });
  });

  describe('WHEN querying for data', () => {
    test('should return a collection of rows', async () => {
      members.query.mockResolvedValueOnce({ rows: [...data] });

      const sql = 'select * from table';
      const rows = await context.query<TestData>(sql);

      expect(rows).toEqual(data);
      expect(mockPool.query).toHaveBeenCalledWith(sql, []);
    });
  });

  describe('WHEN running a query', () => {
    test('should execute without returning any data', async () => {
      members.query.mockResolvedValueOnce(undefined);

      const sql = `insert into table(name, value) values($1, $2)`;
      const params = ['test', 42];
      const data = await context.run(sql, ...params);

      expect(data).toBeUndefined();
      expect(mockPool.query).toHaveBeenCalledWith(sql, params);
    });
  });
});
