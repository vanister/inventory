import { TableNames } from '../models';
import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

// NOTE: remember to change this file to a `.ts` file if it's `.js`!!!

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    // add altering commands here.
    // example:
    /*
      await queryInterface.createTable(TableNames.TableName, {
       id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: DataTypes.INTEGER
       },
       columnOne: {
         type: DataTypes.STRING,
         allowNull: false
       },
       columnTwo: {
         type: DataTypes.STRING(1000),
       }
     })
    */
  },
  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    // add reverting commands here.
    // example:
    // await queryInterface.dropTable(TableNames.TableName);
  }
};
