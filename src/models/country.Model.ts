import * as Sequelize from 'sequelize';
import { sequelizeConn } from '../route/config';
import { countryModel, countryAddModel} from '../interface/country'


export const countryDetails = sequelizeConn.define<countryModel, countryAddModel>('country',{
    name: Sequelize.STRING
}, {
    tableName: 'country',
    name: {
        singular: 'country',
        plural: 'country'
    }
});