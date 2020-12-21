/**
 * Generic interface for a database context.
 */
export interface DbContext {
  /** True, if the underlying connection is closed. False, otherwise. */
  connectionClosed: boolean;
  /** Closes the db connection. */
  close(): Promise<void>;
  /** Opens the connection to the db. */
  open(): Promise<void>;

  /**
   * Runs a query against the database.
   * @param sql the sql query.
   * @returns An array of result rows from the query.
   */
  query<T>(sql: string): Promise<T[]>;

  /**
   * Runs a query against the database without return any data.
   * @param sql the sql query.
   */
  run(sql: string): Promise<void>;
}
