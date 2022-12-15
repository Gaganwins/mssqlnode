import {Sequelize} from 'sequelize'
const db = process.env.DATABASE || 'latest2';
const username = process.env.DB_USER || 'sa';
const password = process.env.DB_PASS || 'Admin@123';

export const sequelizeConn = new Sequelize(db,username,password,{
    dialect: "mssql"
});

sequelizeConn.authenticate();