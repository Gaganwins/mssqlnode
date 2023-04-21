import * as Sequelize from 'sequelize';
import { sequelizeConn } from '../route/config';
import { UserDetailsModel, UserDetailAddModel} from '../interface/userDetails';
import { countryDetails } from './country.Model';


const userDetails = sequelizeConn.define<UserDetailsModel, UserDetailAddModel>('userDetail',{
    stateId: Sequelize.INTEGER,
    phone: Sequelize.STRING,
    address: Sequelize.STRING,
    zipcode: Sequelize.STRING
});
// userDetails.hasOne(countryDetails);
// countryDetails.belongsTo(userDetails, {
//   foreignKey: 'stateId'
// });
export const usersDetail = {
    userDetails
}