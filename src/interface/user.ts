import * as Sequelize from 'sequelize';
import { UserDetailAddModel } from './userDetails';
export interface UserAddModel{
    FirstName: string,
    LastName: string,
    email: string,
    password: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel>{
    id: number,
    FirstName: string,
    LastName: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string,
    userDetails: UserDetailAddModel
}