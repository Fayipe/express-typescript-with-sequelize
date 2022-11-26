<<<<<<< HEAD
import { Server } from "http";
import app from "./app";
import { PORT } from "./config";
import { logger } from "./utils/logger";

const port = PORT || 3000;
const httpServer = new Server(app);

httpServer.listen(PORT, (err) => {
  if (err) {
    return logger.error(err);
  }

  return logger.info(`http Server is listening on port: ${port}`);
});
=======
import app from "./app";
import { Server } from "http";
import { PORT } from "./config";
import { logger } from "./utils/logger";


const port = PORT || 6000;
const server = new Server(app);

server.listen(PORT, (err) => {
    if (err) {
        return logger.error(err);
    }

    return logger.info(`Server is listening on port: ${port}`);
});

>>>>>>> e4605dc2bb5ec2fa8a8b4fd6a32b185a7876479d
