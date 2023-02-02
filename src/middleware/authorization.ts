import passport from "passport";
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

export const adminAuthorize = (req, res, next) => {
    passport.authenticate("jwt", { session: false }, async (error, token) => {
        if (error || !token) {
            return next(new AppError("Unauthorized", null, 401));
        }
        try {
            const checkId = await UserModel.findByPk(token.id)
            if (checkId.membership_type !== "admin") {
                return next(new AppError("You are not a valid admin", null, 400))
            }

            
            const admin = await UserModel.findOne({ where: { username: token.username } });
            if (!admin) {
                return next(new AppError("Unauthorized", null, 401));
            }
            if (admin.membership_type !== "admin") {
                return next(new AppError("You are not a valid admin", null, 400))
            }
            req.user = admin;

        } catch (error) {
            return next(error);
        }
        next();
    })(req, res, next);
}


