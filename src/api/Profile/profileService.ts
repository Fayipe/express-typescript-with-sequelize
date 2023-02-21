import { AppError } from '../../utils/app-error';
import { ProfileModel } from './profileModel';
import { UserModel } from '../User';
import { IProfile } from './IProfile';
// const path = require('path')
import { cloudinary } from '../../helper/imageUpload';


export class ProfileService {
    public uploadPicture = async (user: any, photo:any ) => {
        const result = await cloudinary.uploader
        .upload(photo.path, { folder: "Profile" }, function (result) {
        return result;
      })
      .catch((error) => console.log(error));

    const profileData = {
      profile_picture_url: result.secure_url,
    };
    const hasProfile: boolean = (await user.getProfile()) ? true : false;

    if (hasProfile) {
      // update profile of user by user_id
      let updated = await ProfileModel.update(profileData, {
        where: { userId: user.id },
      });
      if (updated) {
        return await this.getProfile(user.username);
      }
      throw new AppError("Could not update profile picture");
    }else {
        // create and save profile
        const saved = await ProfileModel.create(profileData);
        if (saved && user.setProfile(saved)) {
          return await this.getProfile(user.username);
        }
        throw new AppError("Could not update profile picture");
      }
    }
    public updateProfile = async (user: any, data: IProfile) => {
       
        const checkProfile = await ProfileModel.findOne({ where: { userId: user.id }})
    

        if (checkProfile) {
            let update = await ProfileModel.update(data, { where: { userId: user.id }})
            
            if(!update) {
                throw new AppError ('Profile could not be updated', null, 400)
            }
            
             return this.getProfile(user.username)
            
            
            
        }
        throw new AppError ('Profile not found', null, 404)
}

    
public getProfile = async (username) => {
    const checkUsername = await UserModel.findOne({where: {username}})
    if (checkUsername) {
        const profile = await ProfileModel.findOne({where: { userId: checkUsername.id }})
    
        if (!profile) {
            throw new AppError ('Profile does not exist', null, 404)
        }
        return profile
    }

    throw new AppError ('Username not found',null,404 )
}
}

    