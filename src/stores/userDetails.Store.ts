import { usersDetail } from '../models/userDetails.Model';
import * as Sequelize from 'sequelize';
const Op = Sequelize.Op

export default class userStore {

    static get userDetailsAttributes() {
        return ['id', 'phone', 'address']
    }

    getAll(){
        return usersDetail.userDetails.findAll();
    }
}