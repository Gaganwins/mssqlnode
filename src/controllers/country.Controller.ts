import e, { Request, Response } from 'express';
import store from '../stores/country.Store';
import SendResponse from '../utils/Response'
import STATUS_CODES from '../utils/StatusCodes'
const countryData: any = new store();

let getAll = async function (req: Request, res: Response) {
    try{
        let allCountry = await countryData.getAll();
        
        if (allCountry && allCountry?.length != 0) {
            return SendResponse(res, { users: allCountry }, STATUS_CODES.OK);
        }else{
            return SendResponse(res, { message: 'No user detail found' }, STATUS_CODES.BAD_REQUEST);
        }
    }catch(err){
        console.log(e);
        return SendResponse(res, { message: 'service failed' }, STATUS_CODES.BAD_REQUEST);
    }
}

export const countryController = {
    getAll
}