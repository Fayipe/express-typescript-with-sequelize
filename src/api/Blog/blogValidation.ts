import Joi from "joi";
import { IBlog } from "./IBlog";


export const BlogValidationSchema = Joi.object().keys(<IBlog>{
category_id: Joi.number(),
title: Joi.string().min(6).max(32).required(),
author_name:Joi.string().required(),
blog:Joi.string().required(),
slug:Joi.string(),
is_featured:Joi.boolean(),
read_count:Joi.string().required(),
});


export const EditBlogValidationSchema = Joi.object().keys({
title: Joi.string().min(6).max(32),
author_name:Joi.string(),
blog:Joi.string(),
is_featured:Joi.boolean(),

});
