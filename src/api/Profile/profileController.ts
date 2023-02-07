import { IProfile} from ".";
import { BaseController } from "../baseController";
import { ProfileService } from "./profileService";

export class ProfileController extends BaseController {
    private _profileService = new ProfileService();

    public updateProfile = async (user: any, data:IProfile) => {
        const updatedProfile = await this._profileService.updateProfile(user, data)
        return this.sendResponse(updatedProfile)
       }

       public getProfile = async (username) => {
        const profile = await this._profileService.getProfile(username)
        return this.sendResponse(profile) 
        }
    }