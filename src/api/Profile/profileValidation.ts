import Joi from "joi";
import { IProfile } from "./IProfile";

export const ProfileValidationSchema= Joi.object().keys(<IProfile>{
  // type any is used to prevent error on validation level
  profile_picture_url: Joi.string(),
  relationship_status: Joi.string(),
  occupation: Joi.string(),
  highest_education: Joi.string(),
  current_education: Joi.string(),
  bio: Joi.string(),
  location: Joi.string(),
  facebook_url: Joi.string(),
  twitter_url: Joi.string(),
  instagram_url: Joi.string(),
  snapchat_id: Joi.string(),
});