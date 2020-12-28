import { Pool } from 'pg';
import { DbContext } from './context';

export class PostgresContext implements DbContext {
  private _connectionClosed = false;

  constructor(private db: Pool) {}

  public get connectionClosed(): boolean {
    return this._connectionClosed;
  }

  public async close(): Promise<void> {
    if (this.connectionClosed) {
      return;
    }

    await this.db.end();

    this._connectionClosed = true;
  }

  public async query<T>(sql: string, ...params: any[]): Promise<T[]> {
    const { rows } = await this.db.query<T>(sql, params);

    return rows;
  }

  public async run(sql: string, ...params: any[]): Promise<void> {
    await this.db.query(sql, params);
  }
}
