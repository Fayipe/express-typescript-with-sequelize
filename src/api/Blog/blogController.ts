import { BaseController } from "../baseController";
import { BlogService } from "./blogService";
import { IBlog } from "./IBlog";

/**
 * Blog controller
 *
 * @export
 * @class BlogController
 */
export class BlogController extends BaseController {
    private _blogService = new BlogService();


    // public addBlog = async (user: IBlog) => {
        
    //     const i = await BlogModel.create(user);
    //     return this.sendResponse(i);
    // }

    public updateBlog = async(slug, data:IBlog )=>{

        const updateVal = await this._blogService.updateBlog(slug, data)

        return this.sendResponse(updateVal)


    }
}
