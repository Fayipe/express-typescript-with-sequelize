import Joi from "joi";
import { ISubscription } from "./ISubscription";

export const ProfileValidationSchema= Joi.object().keys(<ISubscription>{
  // type any is used to prevent error on validation level
  coin_balance: Joi.string(),
  expires: Joi.date(),
});