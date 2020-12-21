import { Database } from 'sqlite3';
import { SqliteContext } from './sqlite.context';

describe('SqliteContext', () => {
  const mockDb: Partial<Database> = {};

  test('should create an instance', () => {
    const context = new SqliteContext(mockDb as Database);

    expect(context).toBeDefined();
  });
});
