module.exports = {
  development: {
    username: process.env.INV_DB_DEV_UN || 'postgres',
    password: process.env.INV_DB_DEV_UN || 'postgres123',
    database: process.env.INV_DB_DEV_UN || 'social_inventory_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: process.env.INV_DB_TEST_UN,
    password: process.env.INV_DB_TEST_PW,
    database: process.env.INV_DB_TEST || 'social_inventory_test',
    host: process.env.INV_DB_TEST_HOST || '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.INV_DB_UN,
    password: process.env.INV_DB_PW,
    database: process.env.INV_DB || 'social_inventory',
    host: process.env.INV_DB_HOST,
    dialect: 'postgres',
  },
};
