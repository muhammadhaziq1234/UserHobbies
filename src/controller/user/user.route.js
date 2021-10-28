"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
var common_routes_config_1 = require("../../common/common.routes.config");
var userController_1 = __importDefault(require("./userController"));
var user_middleware_1 = __importDefault(require("../../middleware/user.middleware"));
var error_handling_middlware_1 = require("../../middleware/error.handling.middlware");
var UserRoutes = /** @class */ (function (_super) {
    __extends(UserRoutes, _super);
    function UserRoutes(app) {
        return _super.call(this, app, "UsersRoutes") || this;
    }
    UserRoutes.prototype.configureRoutes = function () {
        this.app
            .route("/api/users")
            .get(userController_1.default.listUsers)
            .post(user_middleware_1.default.validateRequiredUserBodyFields, userController_1.default.createUser, error_handling_middlware_1.errorHandling);
        this.app
            .route("/api/users/:id")
            .put(user_middleware_1.default.validateUserExists, userController_1.default.updateUser, error_handling_middlware_1.errorHandling)
            .delete(userController_1.default.deleteById)
            .get(userController_1.default.getUser);
        this.app
            .route("/api/userHobbies/:id")
            .get(userController_1.default.getUserHobbies, error_handling_middlware_1.errorHandling)
            .put(user_middleware_1.default.validateUserExists, userController_1.default.deleteUserHobbie);
        // (we'll add the actual route configuration here next)
        return this.app;
    };
    return UserRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.UserRoutes = UserRoutes;
