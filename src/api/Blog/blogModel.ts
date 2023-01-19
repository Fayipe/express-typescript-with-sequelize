import Sequelize, { Model } from "sequelize";
import { DB } from "../../shared/database";
import { logger } from "../../utils/logger";

import { ALTER_STATE } from "../../config";
import { UserModel } from "../User";
export class BlogModel extends Model {}
BlogModel.init(
  {
    category_id:{
        type:Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING(50),
      validate: {
        is: /^[a-zA-Z0-9._-]{3,16}$/i,
        notEmpty: {
          msg: "Username cannot be empty",
        },
      },
      allowNull: false,
    },
    author_name: {
      type: Sequelize.STRING(50),
      validate: {
        is: /^[a-zA-Z0-9._-]{3,16}$/i,
        notEmpty: {
          msg: "Username cannot be empty",
        },
      },
      allowNull: false,
    },
    blog:{
        type:Sequelize.TEXT,
        validate: {
            is: /^[a-zA-Z0-9._-]{3,16}$/i,
            notEmpty: {
              msg: "Username cannot be empty",
            },
          },
        allowNull: false,

    },
   slug: {
      type: Sequelize.STRING(20), 
    },
  
   is_featured: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    read_count:{
        type: Sequelize.INTEGER
    }
  },
  {
    sequelize: DB,
    modelName: "blogs",
  }
);

UserModel.hasMany(BlogModel);
BlogModel.belongsTo(UserModel);

const options: any = { alter: ALTER_STATE };

BlogModel.sync(options).then(() => {
  logger.info("Blog table migrated");
  // Table created
});
