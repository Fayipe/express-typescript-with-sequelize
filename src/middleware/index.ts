import { authorize } from "./authorization";
<<<<<<< HEAD
import errorHandler from "./errorHandler";
import global from "./global";
import { validation } from "./validation";
export { global, validation, errorHandler, authorize };
=======

import errorHandler from "./errorHandler";
import global from "./global";
import { loginStrategy, signupStrategy } from "./passport";
import { validation } from "./validation";
import { FrontendAssetsUpload } from "./uploads";

export {
  global,
  validation,
  errorHandler,
  authorize,
  loginStrategy,
  signupStrategy,
  FrontendAssetsUpload,
};
>>>>>>> e4605dc2bb5ec2fa8a8b4fd6a32b185a7876479d
