import Joi from "joi";
import { IUser } from "./IUser";

export const UserValidationSchema = Joi.object().keys(<IUser>{
  username: Joi.string().regex(/^[a-zA-Z0-9._-]{3,16}$/i),
  first_name: Joi.string().alphanum().max(30).allow("").optional(),
  last_name: Joi.string().alphanum().max(30).allow("").optional(),
  email: Joi.string().email({ minDomainAtoms: 2 }),
  password: Joi.string().min(6).max(32),
  phone_number: Joi.string().regex(/^[0-9+]{3,16}$/),
  gender: Joi.string().allow(""),
  membership_type: Joi.string().allow(""),
  date_of_birth: Joi.date(),
  email_verification_code: Joi.string(),
});
