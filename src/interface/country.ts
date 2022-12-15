import * as Sequelize from 'sequelize';
export interface countryAddModel{
    name: string
}

export interface countryModel extends Sequelize.Model<countryModel,countryAddModel>{
    id: number,
    name: number,
    createdAt: string,
    updatedAt: string
}