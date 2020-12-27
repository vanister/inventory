/**
 * Generic interface for a database context.
 */
export interface DbContext {
  /** True, if the underlying connection is closed. False, otherwise. */
  readonly connectionClosed: boolean;

  /** Close the db connection. */
  close(): Promise<void>;

  /**
   * Run a query against the database.
   * @param sql the sql query.
   * @param params Optional: the sql query params.
   * @returns An array of result rows from the query.
   */
  query<T>(sql: string, ...params: any[]): Promise<T[]>;

  /**
   * Run a query against the database without return any data.
   * @param sql the sql query.
   * @param params Optional: the sql query params.
   */
  run(sql: string, ...params: any[]): Promise<void>;
}
