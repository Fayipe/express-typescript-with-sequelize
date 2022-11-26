import * as dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const ENVIRONMENT = process.env.NODE_ENV;
export const APP_URL = process.env.APP_URL;
export const BASE_PATH = process.env.BASE_PATH;
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const JWT_SECRET = process.env.JWT_SECRET;
<<<<<<< HEAD
export const ALTER_STATE = process.env.ALTER_STATE;
export const JWT_SECRET_REFRESHTOKEN = process.env.JWT_SECRET_REFRESHTOKEN;

=======

export const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;
>>>>>>> e4605dc2bb5ec2fa8a8b4fd6a32b185a7876479d
export const GMAIL_USERNAME = process.env.GMAIL_USERNAME;
export const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;
