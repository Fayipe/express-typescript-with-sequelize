import passport from "passport";
<<<<<<< HEAD
import { UserModel } from "./../api/User";
import { AppError } from "./../utils/app-error";

/**
 * middleware for checking user authorization with jwt
 */

export const authorize = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, async (error, token) => {
    if (error || !token) {
      return next(new AppError("Unauthorized", null, 401));
    }

    try {
      const user = await UserModel.findOne({
        where: { username: token.username },
      });

      if (!user) {
        return next(new AppError("Unauthorized", null, 401));
      }
      req.user = user;
    } catch (error) {
      return next(error);
    }
    next();
  })(req, res, next);
};
=======
import { UserModel } from "../api/User";
import { AppError } from "../utils/app-error";


/**
 * middleware for checking authorization with jwt
 */
export const authorize = (req, res, next) => {
    passport.authenticate("jwt", { session: false }, async (error, token) => {
        if (error || !token) {
            return next(new AppError("Unauthorized", null, 401));
        }
        try {
            const user = await UserModel.findOne({ where: { username: token.username } });
            if (!user) {
                return next(new AppError("Unauthorized", null, 401));
            }
            req.user = user;
        } catch (error) {
            return next(error);
        }
        next();
    })(req, res, next);
};


>>>>>>> e4605dc2bb5ec2fa8a8b4fd6a32b185a7876479d
