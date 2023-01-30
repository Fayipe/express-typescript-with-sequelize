import Joi from "joi";
import { IBlogCategory } from "./IBlogCategory";

export const BlogCategoryValidationSchema = Joi.object().keys(<IBlogCategory>{
  
  category_name: Joi.string().required(),
});
