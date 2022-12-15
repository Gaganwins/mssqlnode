import { userController }  from '../controllers/user.Controller';
import { userDetailController }  from '../controllers/userDetail.Controller';
import { countryController }  from '../controllers/country.Controller';
import express from 'express';
export const route = express.Router();

//create user
route.post("/user/create", userController.newUser);
route.get("/user/getAll", userController.getAll);
route.get("/userDetails/getAll", userDetailController.getAll);
route.get("/country/getAll", countryController.getAll);