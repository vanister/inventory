require('dotenv/config');

const path = require('path');
const { env } = process;

const config = {
  local: {
    storage: path.resolve(
      __dirname,
      '../..',
      'localdb',
      'social_inventory_local.db'
    ),
    dialect: 'sqlite'
  },
  development: {
    username: env.INV_DB_DEV_UN || 'postgres',
    password: env.INV_DB_DEV_PW || 'postgres123',
    database: env.INV_DB_DEV || 'social_inventory_dev',
    host: env.INV_DB_DEV_HOST || 'localhost',
    port: env.INV_DB_DEV_PORT || 5432,
    dialect: 'postgres'
  },
  test: {
    username: env.INV_DB_TEST_UN,
    password: env.INV_DB_TEST_PW,
    database: env.INV_DB_TEST || 'social_inventory_test',
    host: env.INV_DB_TEST_HOST || 'localhost',
    port: env.INV_DB_TEST_PORT || 5432,
    dialect: 'postgres'
  },
  production: {
    username: env.INV_DB_UN,
    password: env.INV_DB_PW,
    database: env.INV_DB || 'social_inventory',
    host: env.INV_DB_HOST,
    port: env.INV_DB_PORT || 5432,
    dialect: 'postgres'
  }
};

module.exports = config;
