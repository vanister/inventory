export type ParserFunction<T> = (text: string) => T;

/**
 * Creates a specific parser for the body of a request using a given parser function.
 * @param parser The parser to use. i.e.: `JSON.parse`.
 * @returns The specific type of parser function.
 */
export function bodyParser<T>(parser: ParserFunction<T>): ParserFunction<T> {
  if (typeof parser !== 'function') {
    throw new Error('parser');
  }

  // return a function that will use the given parser
  return function (text: string): T {
    if (!text) {
      return undefined;
    }

    return parser(text);
  };
}
