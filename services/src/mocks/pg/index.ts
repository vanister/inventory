import { Pool } from 'pg';

const members = {
  end: jest.fn().mockResolvedValue(undefined),
  query: jest.fn().mockResolvedValue([])
};

const mockPool: Pool = members as any;

export { members, mockPool };
