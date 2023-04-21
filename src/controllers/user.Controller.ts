import joi, { any } from 'joi';
import e, { Request, Response } from 'express';
import store from '../stores/user.Store';
import bcrypt, { hash } from 'bcrypt';
import SendResponse from '../utils/Response'
import STATUS_CODES from '../utils/StatusCodes'
const userData: any = new store();

// create new users
let newUser = async function (req: Request, res: Response) {

    try {
        //validation
        const schema = joi.object({
            firstName: joi.string().required(),
            lastName: joi.string().required(),
            email: joi.string().required(),
            password: joi.string().required()
        });
        const params = schema.validate(req.body, { abortEarly: false });

        if (params.error) {
            return SendResponse(res, { error: params.error.message }, STATUS_CODES.BAD_REQUEST);
        }
        
        //email exist validation
        let emailExist = await userData.findByEmail({ email: params.value.email });
        // return;
        if (emailExist && emailExist?.length != 0) {
            return SendResponse(res, { message: 'email already exists' }, STATUS_CODES.BAD_REQUEST)
        }

        let userInput = {
            id:params.value.id,
            firstName: params.value.firstName,
            lastName: params.value.lastName,
            email: params.value.email,
            password: params.value.password
        }
        //password hashing
        userInput.password = await bcrypt.hash(userInput.password, 10);
        
        //create user
        let user = await userData.createUser(userInput);
        console.log('user------------',user);
        
        return SendResponse(res, { message: 'User created' }, STATUS_CODES.CREATED);
    }
    catch (e) {
        console.log('------------------------',e);
        return SendResponse(res, { message: 'service failed' }, STATUS_CODES.BAD_REQUEST);
    }
}

let getAll = async function (req: Request, res: Response) {
    try{
        let allUsers = await userData.getAll();
        
        if (allUsers && allUsers?.length != 0) {
            console.log('allUsers',allUsers['user']);
            // let users = [
            //     'id':
            // ]
            return SendResponse(res, { users: allUsers }, STATUS_CODES.OK);
        }else{
            return SendResponse(res, { message: 'No user found' }, STATUS_CODES.BAD_REQUEST);
        }
    }catch(err){
        // console.log(e);
        return SendResponse(res, { message: 'service failed' }, STATUS_CODES.BAD_REQUEST);
    }
}

export const userController = {
    newUser,
    getAll
}