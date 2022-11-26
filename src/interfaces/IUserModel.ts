import { IBaseInterface } from "../api/baseInterface";

export interface IUserModel extends IBaseInterface {
    username: string;
 
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: number;
    gender: "Male" | "Female";
    membership_type: "user"  | "admin";
    email_verification_code: string;
    password_reset_code: string;
    shipping_address: string;
    verified: boolean;
    socket_id: string;
    auth_key: string;
    login_id:string;
    player_id: string;
    pass_updated: number;
 
 
    date_of_birth:Date;

   
}
