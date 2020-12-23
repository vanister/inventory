import { bodyParser } from './request.util';

describe('Request Utility', () => {
  describe('WHEN parsing the request body', () => {
    test('should create a specific parser', () => {
      const expectedData = { name: 'test' };
      const parser = jest.fn().mockReturnValue(expectedData);
      const testParser = bodyParser(parser);

      const data = testParser('{ name: "test" }');

      expect(data).toEqual(expectedData);
    });
  });

  describe('WHEN creating a parser', () => {
    test('should throw an error if parser is not provided', () => {
      expect(() => bodyParser(undefined)).toThrowError('parser');
    });
  });
});
