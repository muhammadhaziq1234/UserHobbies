import express from "express";
import cors from "cors";
import { CommonRoutesConfig } from "./common/common.routes.config";
import { UserRoutes } from "./controller/user/user.route";
import { HobbieRoutes } from "./controller/hobbie/hobbie.route";
import swaggerUi = require("swagger-ui-express");
import fs = require("fs");
import { connect } from "./config/mongooseConnection";
const app = express();
express.urlencoded({
  extended: true,
});
app.use(express.json());
app.use(cors());
app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(
    JSON.parse(fs.readFileSync(process.cwd() + "/src/swagger.json", "utf8"))
  )
);
connect();
const routes: Array<CommonRoutesConfig> = [];
routes.push(new UserRoutes(app));
routes.push(new HobbieRoutes(app));
require("dotenv").config();

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(`Server running at http://localhost:${port}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App Listing On ${port} Port`);
});
process.on("uncaughtException", function (err) {
  console.error(new Date().toUTCString() + " uncaughtException:", err.message);
  console.error(err.stack);
  process.exit(1);
});
