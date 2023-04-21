import { UserAddModel } from '../interface/user';
import { User } from '../models/user.Model';
import { usersDetail } from '../models/userDetails.Model';
import * as Sequelize from 'sequelize';
const Op = Sequelize.Op

export default class userStore {

    static get userAttributes() {
        return ['id', 'email']
    }

    createUser(userInput: UserAddModel) {
        return User.UserModel.create(userInput);
    }

    findByEmail({email}: UserAddModel) {
        return User.UserModel.findOne({ where: { 'email' : email } }).then(user => {
            return user;
        });
    }

    getAll(){
        return User.UserModel.findAll({attributes: ['id', 'firstName', 'lastName', 'email'],
            include:[{model: usersDetail.userDetails}]
        });
    }
}