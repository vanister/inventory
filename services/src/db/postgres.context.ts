import { Pool } from 'pg';
import { DbContext } from './context';

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
    const { rows } = await this.db.query<T>(sql, params);

    return rows;
  }

  public async run(sql: string, ...params: any[]): Promise<void> {
    await this.db.query(sql, params);
  }
}
