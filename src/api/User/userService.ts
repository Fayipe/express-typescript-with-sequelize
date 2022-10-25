import { AppError } from "../../utils/app-error";
import { UserModel } from "./userModel";

export class UserService {
  public getUser = async (username: string) => {
    // find user from user model by username
    let user = await UserModel.findOne({
      where: { username },
      attributes: {
        exclude: ["password", "email_verification_code", "auth_key"],
      },
    });

    // check if user exists then the next operation can perform,or not
    if (user) {
      user = user.toJSON();

      // check the subscription expires or not

      return user;
    }
    throw new AppError(`User '${username}' not found.`, null, 404);
  };
}
