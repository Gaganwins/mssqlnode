import * as Sequelize from 'sequelize';
import { UserDetailAddModel } from './userDetails';
export interface UserAddModel{
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel>{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    // password: string,
    // createdAt: string,
    // updatedAt: string,
    userDetails: UserDetailAddModel
}