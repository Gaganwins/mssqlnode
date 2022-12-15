import * as Sequelize from 'sequelize';
import { sequelizeConn } from '../route/config';
import { UserAddModel, UserModel} from '../interface/user';
import { usersDetail } from './userDetails.Model';

let userDetails = usersDetail.userDetails;
 const UserModel = sequelizeConn.define<UserModel, UserAddModel>('user',{
    FirstName: Sequelize.STRING,
    LastName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
});
UserModel.hasOne(userDetails);
userDetails.belongsTo(UserModel, {
  foreignKey: 'id'
});
export const User = {
    UserModel
}