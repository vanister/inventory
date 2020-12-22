import { Pool } from 'pg';
import { DbContext } from './db.context';

export class PostgresContext implements DbContext {
  private _connectionClosed: boolean = false;

  public get connectionClosed() {
    return this._connectionClosed;
  }

  constructor(private db: Pool) {}

  public async close(): Promise<void> {
    if (this.connectionClosed) {
      return;
    }

    await this.db.end();

    this._connectionClosed = true;
  }

  public async query<T>(sql: string, ...params: any[]): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  public async run(sql: string, ...params: any[]): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
