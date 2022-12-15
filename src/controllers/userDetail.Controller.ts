import e, { Request, Response } from 'express';
import store from '../stores/userDetails.Store';
import SendResponse from '../utils/Response'
import STATUS_CODES from '../utils/StatusCodes'
const userData: any = new store();

let getAll = async function (req: Request, res: Response) {
    try{
        let allUsersDetail = await userData.getAll();
        
        if (allUsersDetail && allUsersDetail?.length != 0) {
            return SendResponse(res, { users: allUsersDetail }, STATUS_CODES.OK);
        }else{
            return SendResponse(res, { message: 'No user detail found' }, STATUS_CODES.BAD_REQUEST);
        }
    }catch(err){
        console.log(e);
        return SendResponse(res, { message: 'service failed' }, STATUS_CODES.BAD_REQUEST);
    }
}

export const userDetailController = {
    getAll
}