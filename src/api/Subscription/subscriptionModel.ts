import Sequelize, { Model } from "sequelize";
import { DB } from "../../shared/database";
import { logger } from "../../utils/logger";

import { ALTER_STATE } from "../../config";
import { UserModel } from "../User";
export class SubscriptionModel extends Model {}
SubscriptionModel.init(
    {
        coin_balance: {
            type: Sequelize.STRING(100),
            defaultValue: 0,
        },
        expires: {
            type: Sequelize.DATE,
        },
    
    },
    {sequelize: DB,
    modelName: "subscriptions",
    }
);

UserModel.hasOne(SubscriptionModel);
SubscriptionModel.belongsTo(UserModel, { foreignKey: "user_id" });



const options: any = { alter: ALTER_STATE };

SubscriptionModel.sync(options).then(() => {
  logger.info("Subscription table migrated");
  // Table created
});