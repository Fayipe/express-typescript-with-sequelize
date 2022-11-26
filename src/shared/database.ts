import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "../config";
export const DB = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
    logging: false,
    typeValidation: true,
<<<<<<< HEAD
    define: {
        charset: "utf8mb4",
=======
    dialectOptions: {
        supportBigNumbers: true,
        bigNumberStrings: true,
    },
    define: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true,
        underscored: true,
>>>>>>> e4605dc2bb5ec2fa8a8b4fd6a32b185a7876479d
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
<<<<<<< HEAD
    },

=======
        evict: 60000,
    },
>>>>>>> e4605dc2bb5ec2fa8a8b4fd6a32b185a7876479d
});
