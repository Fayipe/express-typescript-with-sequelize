import { IBaseInterface } from "../baseInterface";

export interface IUser extends IBaseInterface {
  // type any is used to prevent error on validation level
<<<<<<< HEAD
  username: any;
=======

  username: any;

>>>>>>> e4605dc2bb5ec2fa8a8b4fd6a32b185a7876479d
  first_name: any;
  last_name: any;
  email: any;
  password: any;
  phone_number: any;
  gender: any;
  membership_type: any;
<<<<<<< HEAD
  date_of_birth: any;
=======

  date_of_birth: any;

>>>>>>> e4605dc2bb5ec2fa8a8b4fd6a32b185a7876479d
  email_verification_code: any;
}
