import { AppError } from '../../utils/app-error';
import { ProfileModel } from './profileModel';
import { UserModel } from '../User';
import { IProfile } from './IProfile';


export class ProfileService {
    public updateProfile = async (user: any, data: IProfile) => {
       
        const checkProfile = await ProfileModel.findOne({ where: { userId: user.id }})

        if (checkProfile) {
            let update = await ProfileModel.update(data, { where: { userId: user.id }})
            
            if(!update) {
                throw new AppError ('Profile could not be updated', null, 400)
            }
            
            return update
            
            
            
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