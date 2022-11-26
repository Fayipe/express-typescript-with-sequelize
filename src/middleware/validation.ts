import Joi from "joi";
import _ from "lodash";
<<<<<<< HEAD
=======
import { validationHandler } from "../shared/validationHandler";
>>>>>>> e4605dc2bb5ec2fa8a8b4fd6a32b185a7876479d

/**
 *  Validates incoming input in the body of a request.
 *  Runs only on POST or PUT requests
 *
 * @export
 * @param {*} schema validationSchema for this route
 * @returns
 */
<<<<<<< HEAD
export const validation = (
  schema: Joi.ObjectSchema,
  options?: Joi.ValidationOptions
) => {
  // enabled HTTP methods for request data validation
  const _supportedMethods = ["post", "put", "patch"];

  // Joi validation options
  const _validationOptions = {
    abortEarly: true, // abort after the first validation error
    allowUnknown: true, // allow unknown keys that will be ignored
    stripUnknown: true, // remove unknown keys from the validated data
    ...options,
  };

  // return the validation middleware
  return (req, res, next) => {
    const method = req.method.toLowerCase();

    if (_.includes(_supportedMethods, method) && schema) {
      try {
        /**
         * Validate req.body using the schema and validation options
         * Replace req.body with the data after Joi validation
         */
        req.body = Joi.attempt(req.body, schema, _validationOptions);
        next();
      } catch (error) {
        const message: string = error.details[0].message.replace(/['"]/g, "");
        /* Format response */
        const JoiError = {
          status: false,
          message,
        };

        res.status(400).json(JoiError);
      }
    } else {
      next();
    }
  };
=======
export const validation = (schema: Joi.ObjectSchema, options?: Joi.ValidationOptions) => {

    // enabled HTTP methods for request data validation
    const _supportedMethods = ["post", "put", "patch"];

    // Joi validation options
    const _validationOptions = {
        abortEarly: true, // abort after the first validation error
        allowUnknown: true, // allow unknown keys that will be ignored
        stripUnknown: true, // remove unknown keys from the validated data
        ...options,
    };

    // return the validation middleware
    return (req, res, next) => {
        const method = req.method.toLowerCase();

        if (_.includes(_supportedMethods, method) && schema) {

            // Validate req.body using the schema and validation options
            const validationRes = Joi.validate(req.body, schema, _validationOptions, validationHandler);
            if (!validationRes.status) {
                res.status(400).json(validationRes.data);
            } else {
                // Replace req.body with the data after Joi validation
                req.body = validationRes.data;
                next();
            }

        } else {
            next();
        }
    };
>>>>>>> e4605dc2bb5ec2fa8a8b4fd6a32b185a7876479d
};
