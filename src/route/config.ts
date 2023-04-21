import {Sequelize} from 'sequelize';
import * as tedious from 'tedious';

const dbname = process.env.DATABASE || 'nodepractice';
const username = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || '';
const host = process.env.HOST || "localhost";

export const sequelizeConn = new Sequelize(dbname,username,password,{
    dialect: "mysql",
    host: host,
	// dialectModule: tedious,
	// freezeTableName: true,
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
});

sequelizeConn.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});