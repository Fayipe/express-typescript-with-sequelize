import express from "express";
import { AuthRouter } from "./api/Auth";
import { BlogRouter } from "./api/Blog";
import { BlogCategoryRouter } from "./api/BlogCategory";
import { ProfileRouter } from "./api/Profile";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger/swagger.json";
import { UserRouter } from "./api/User";
import { BASE_PATH } from "./config";
import { errorHandler, global } from "./middleware";
import { DB } from "./shared/database";
import { logger } from "./utils/logger";

class App {
  public express = express();
  public basePath = BASE_PATH || "";
  constructor() {
    this.boot();
  }

  private boot() {
    this.initializeDb();
    this.registerMiddlewares();
    this.mountRoutes();
    this.handleUncaughtErrorEvents();
  }

  private mountRoutes() {
    this.express.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
    this.express.use(`${this.basePath}/auth`, AuthRouter);
    this.express.use(`${this.basePath}/users`, UserRouter);
    this.express.use(`${this.basePath}/blog`, BlogRouter);
    this.express.use(`${this.basePath}/blogCategory`, BlogCategoryRouter);
    this.express.use(`${this.basePath}/profile`, ProfileRouter);
  }

  private registerMiddlewares() {
    global(this.express);
  }

  private initializeDb() {
    DB.authenticate()
      .then(() => {
        logger.info("Database connection has been established successfully.");
      })
      .catch((err) => {
        throw err;
      });
  }

  // Error handlers
  private handleUncaughtErrorEvents() {
    process.on("unhandledRejection", (reason, promise) => {
      throw reason;
    });

    process.on("uncaughtException", (error) => {
      logger.error(
        `Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`
      );
      process.exit(1);
    });

    process.on("SIGINT", () => {
      logger.info(" Alright! Bye bye!");
      process.exit();
    });

    this.express.use(errorHandler);
  }
}

export default new App().express;
