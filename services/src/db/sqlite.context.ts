import { sqlite3 } from 'sqlite3';
import { Database } from 'sqlite3';
import { DbContext } from './db.context';

export class SqliteContext implements DbContext {
  connectionClosed: boolean;

  constructor(private db: Database) {}

  async query<T>(sql: string): Promise<T> {
    throw new Error('not implemented');
  }

  async run(sql: string): Promise<void> {}
  async open(): Promise<void> {}
  async close(): Promise<void> {}
}
