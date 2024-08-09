import { Sequelize } from 'sequelize';
import HomeLoanModel from './home_loan.js';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database_setup/mydatabase.db'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.HomeLoan = HomeLoanModel(sequelize, Sequelize);

export default db;