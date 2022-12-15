import App from './app';
import dotenv from 'dotenv';
dotenv.config()

let port:any = process.env.PORT || 3000;

new App(port).listen();