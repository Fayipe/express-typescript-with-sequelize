import { Op } from 'sequelize';
import { AppError } from '../../utils/app-error';
import { BlogCategoryModel } from './blogCategoryModel';
import { IBlogCategory } from './IBlogCategory'

export class BlogCategoryService {
    public createBlogCategory = async (data: IBlogCategory) => {
        const blog = await BlogCategoryModel.findOne({where: {category_name: data.category_name}})
        if (blog) {
            throw new AppError ('Duplicate blog category found', null, 400)
        }
        const newBlog = await BlogCategoryModel.create(data)
        if (newBlog) {
            return newBlog;
        
        }
        throw new AppError ('Could not create blog category',null, 400)
    }
    public getAllBlogCategory = async () => {
        const all = await BlogCategoryModel.findAll();
        return all 
    }
    public deleteBlogCategory = async (id: number) => {
        const blog = await BlogCategoryModel.findOne({where: {id}})
        if (blog) {
            const deleteById = await BlogCategoryModel.destroy({ 
                where: {id}
            })
            return deleteById
        }
        throw new AppError('Could not delete blog category', null, 400)


    }
    
    public updateBlogCategory = async (id: number, data: IBlogCategory) => {
        const checkCategory = await BlogCategoryModel.findByPk(id)
          
        if (!checkCategory) {
            throw new AppError ('Blog category not found', null, 400)
        }  
        const duplicateCategory = await BlogCategoryModel.findAll({
            where: {
              [Op.and]: [
                { category_name: data.category_name },
                {
                  id: {
                    [Op.not]: id,
                  },
                },
              ],
            },
          });
          
        if (duplicateCategory.length === 0) {
            const updated = await BlogCategoryModel.update(data, { where: { id } })
            if (!updated){
                throw new AppError ('Blog Category could not be updated', null, 400)
            }

           return await BlogCategoryModel.findByPk(id)
        }
        throw new AppError ('Duplicate category found', null, 400)
   

      }

}
