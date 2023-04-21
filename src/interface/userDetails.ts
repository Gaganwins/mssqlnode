import * as Sequelize from 'sequelize';
import { countryModel } from './country';
export interface UserDetailAddModel{
    stateId: number,
    phone: string,
    address: string,
    zipcode: string
}

export interface UserDetailsModel extends Sequelize.Model<UserDetailsModel,UserDetailAddModel>{
    id: number,
    stateId: number,
    phone: string,
    address: string,
    zipcode: string,
    createdAt: string,
    updatedAt: string,
    // countryDetail: countryModel
}