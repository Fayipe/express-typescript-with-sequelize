import Sequelize, { Model } from "sequelize";
import { DB } from "../../shared/database";
import { logger } from "../../utils/logger";

import { ALTER_STATE } from "../../config";
import { UserModel } from "../User";
export class NotificationModel extends Model {}
NotificationModel.init(
    {
        message: {
            type: Sequelize.STRING(150),
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please provide a notification message",
                },
            },
        },
        context: {
            type: Sequelize.STRING(150),
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please provide the notification context",
                },
            },
        },
        is_read: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        triggered_by: {
            type: Sequelize.INTEGER,
            references: { model: UserModel, key: "id" },
        },
        extra_data: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: { model: UserModel, key: "id" },
        },
    
    },
    {sequelize: DB,
    modelName: "notifications",
    }
);

UserModel.hasMany(NotificationModel, { foreignKey: "user_id" })
NotificationModel.belongsTo(UserModel);



const options: any = { alter: ALTER_STATE };

NotificationModel.sync(options).then(() => {
  logger.info("Notification table migrated");
  // Table created
});