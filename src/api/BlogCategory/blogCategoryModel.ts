import Sequelize, { Model } from "sequelize";
import { DB } from "../../shared/database";
import { logger } from "../../utils/logger";

import { ALTER_STATE } from "../../config";
export class BlogCategoryModel extends Model {}
BlogCategoryModel.init(
  {
    category_name: {
      type: Sequelize.STRING(120),
      unique: {
        name: "category_name",
        msg: "Duplicate category_name found",
      },
      allowNull: false,
      validate: {
        notNull: {
            msg: "Please provide the blog category"
        }
      }
      
  },
},
  {
  
    sequelize: DB,
    modelName: "blog_categories",
  }
);

const options: any = { alter: ALTER_STATE };

BlogCategoryModel.sync(options).then(() => {
  logger.info("Blog Category table migrated");
  // Table created
});
