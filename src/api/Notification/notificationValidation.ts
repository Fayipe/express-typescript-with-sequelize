import Joi from "joi";
import { INotification } from "./INotification";

export const ProfileValidationSchema= Joi.object().keys(<INotification>{
  // type any is used to prevent error on validation level
  message: Joi.string(),
  context: Joi.string(),
  triggered_by: Joi.number(),
  user_id: Joi.number(),
  
});