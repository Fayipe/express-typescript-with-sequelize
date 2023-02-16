import express from "express";
import { authorize, validation  } from "../../middleware";

import { controllerHandler } from "./../../shared/controllerHandler";
import { ProfileController } from "./profileController";
import { ProfileValidationSchema } from "./profileValidation";
import {  FrontendAssetsUpload } from '../../middleware/uploads'


const router = express.Router();
const call = controllerHandler;
const Profile = new ProfileController();

router.put("/update", authorize, [validation(ProfileValidationSchema)],
  call(Profile.updateProfile, (req, res, next) => [req.user, req.body])
  )
router.get("/:username",
    call(Profile.getProfile, (req, res, next) => [req.params.username])
  );
router.post("/uploadPicture", authorize, [validation(ProfileValidationSchema)], FrontendAssetsUpload.single('photo'),
  call(Profile.uploadPicture,(req, res, next) => [req.user, req.file] )

)


export const ProfileRouter = router
