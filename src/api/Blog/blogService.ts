import { Op } from "sequelize";
import { AppError } from "../../utils/app-error";
import { BlogModel } from "./blogModel";
import { IBlog } from "./IBlog";
const crypto = require("crypto");
const slugify = require("slugify");

export class BlogService {
 
  public createBlog = async (user: any, data: IBlog) => {
    // // find user from user model by username
    // let user = await BlogModel.create({
    //   where: { username },
    //   attributes: {
    //     exclude: ["password", "email_verification_code", "auth_key"],
    //   },
    // });
    // // check if user exists then the next operation can perform,or not
    // if (user) {
    //   user = user.toJSON();
    //   // check the subscription expires or not
    //   return user;
    // }
    // throw new AppError(`User '${username}' not found.`, null, 404);
  };
  public updateBlog = async (slug, data: IBlog) => {
    const blogExist = await BlogModel.findOne({
      where: {
        slug,
      },
    });
    if (!blogExist) {
      throw new AppError(`blog was not found`, null, 404);
    }

    if (data.title) {
      const titleExist = await BlogModel.findAll({
        where: {
          [Op.and]: [
            {
              title: data.title,
            },
            { slug: { [Op.not]: slug } },
          ],
        },
      });
      if (titleExist.length > 0) {
        throw new AppError("duplicate error found", null, 400);
      }
      data.slug = await this.createSlug(data.title);
    }

    data.category_id = blogExist.category_id;
    data.read_time = blogExist.read_count;

    const updatedValues = await BlogModel.update(data, {
      where: {
        slug,
      },
    });
    if (!updatedValues) {
      throw new AppError("Could not update", null, 400);
    }
    return await BlogModel.findOne({
      where: { slug },
    });
  };

  public createSlug = async (title: string) => {
    let newString = slugify(title, {
      remove: /[*+~.()""!?:/@#${}<>,]/g,
      lower: true,
    });
    const randomBytes = crypto.randomBytes(6).toString("hex");
    newString = `${newString}-${randomBytes}`;
  };
}
