import { IBaseInterface } from "../api/baseInterface";

export interface IUserModel extends IBaseInterface {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: number;
  gender: "male" | "female";
  membership_type: "user";
  date_of_birth: string;
  email_verification_code: string;
  password_reset_code: string;
  verified: boolean;

  auth_key: string;
  player_id: string;
  pass_updated: number;
}
