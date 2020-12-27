import { TestData, data } from '..';
import { DbContext } from '../../db/context';

const members: Partial<DbContext> = {
  connectionClosed: false,
  close: jest.fn().mockResolvedValue(undefined),
  query: jest.fn().mockResolvedValue([...data]),
  run: jest.fn().mockResolvedValue(undefined)
};

const mockContext: DbContext = members as DbContext;

export { members, mockContext };
