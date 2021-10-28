"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var user_route_1 = require("./controller/user/user.route");
var hobbie_route_1 = require("./controller/hobbie/hobbie.route");
var swaggerUi = require("swagger-ui-express");
var fs = require("fs");
var mongooseConnection_1 = require("./config/mongooseConnection");
var app = (0, express_1.default)();
express_1.default.urlencoded({
    extended: true,
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(JSON.parse(fs.readFileSync(process.cwd() + "/src/swagger.json", "utf8"))));
(0, mongooseConnection_1.connect)();
var routes = [];
routes.push(new user_route_1.UserRoutes(app));
routes.push(new hobbie_route_1.HobbieRoutes(app));
require("dotenv").config();
app.get("/", function (req, res) {
    res.status(200).send("Server running at http://localhost:" + port);
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("App Listing On " + port + " Port");
});
process.on("uncaughtException", function (err) {
    console.error(new Date().toUTCString() + " uncaughtException:", err.message);
    console.error(err.stack);
    process.exit(1);
});
