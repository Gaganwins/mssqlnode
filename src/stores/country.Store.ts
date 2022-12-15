import { countryDetails } from '../models/country.Model';
import * as Sequelize from 'sequelize';
const Op = Sequelize.Op

export default class countryStore {

    static get userDetailsAttributes() {
        return ['id', 'name']
    }

    getAll(){
        return countryDetails.findAll();
    }
}