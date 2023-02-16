import { IBaseInterface } from "../baseInterface";

export interface IProfile extends IBaseInterface {
  // type any is used to prevent error on validation level
  relationship_status: any;
  occupation: any;
  highest_education: any;
  current_education: any;
  bio: any;
  location: any;
  facebook_url: any;
  twitter_url: any;
  instagram_url: any;
  snapchat_id: any;
}