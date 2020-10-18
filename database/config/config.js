require('dotenv/config');

const { env } = process;
const config = {
  development: {
    username: env.INV_DB_DEV_UN || 'postgres',
    password: env.INV_DB_DEV_PW || 'postgres123',
    database: env.INV_DB_DEV || 'social_inventory_dev',
    host: 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: env.INV_DB_TEST_UN,
    password: env.INV_DB_TEST_PW,
    database: env.INV_DB_TEST || 'social_inventory_test',
    host: env.INV_DB_TEST_HOST || 'localhost',
    dialect: 'postgres'
  },
  production: {
    username: env.INV_DB_UN,
    password: env.INV_DB_PW,
    database: env.INV_DB || 'social_inventory',
    host: env.INV_DB_HOST,
    dialect: 'postgres'
  }
};
module.exports = config;
