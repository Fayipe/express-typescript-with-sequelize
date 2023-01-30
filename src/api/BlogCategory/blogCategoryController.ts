import { IBlogCategory } from ".";
import { BaseController } from "../baseController";
import { BlogCategoryService } from "./blogCategoryService";

export class BlogCategoryController extends BaseController {
     private _blogCategoryService = new BlogCategoryService();
     public createBlog = async(data: IBlogCategory) => {
        const blogg = await this._blogCategoryService.createBlogCategory(data)
        return this.sendResponse(blogg)
     }

     public getAllBlogCategory = async () => {
      const blogs = await this._blogCategoryService.getAllBlogCategory()
      return this.sendResponse(blogs) 
     }
     public deleteBlogCategory = async (id:number) => {
      const deletedBlog = await this._blogCategoryService.deleteBlogCategory(id)
      return this.sendResponse(deletedBlog)
     }
     public updateBlogCategory = async (id: number, data:IBlogCategory) => {
      const updatedBlog = await this._blogCategoryService.updateBlogCategory(id, data)
      return this.sendResponse(updatedBlog)
     }
}