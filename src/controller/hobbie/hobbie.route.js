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
exports.HobbieRoutes = void 0;
var common_routes_config_1 = require("../../common/common.routes.config");
var hobbieController_1 = __importDefault(require("./hobbieController"));
var hobbie_middleware_1 = __importDefault(require("../../middleware/hobbie.middleware"));
var error_handling_middlware_1 = require("../../middleware/error.handling.middlware");
var HobbieRoutes = /** @class */ (function (_super) {
    __extends(HobbieRoutes, _super);
    function HobbieRoutes(app) {
        return _super.call(this, app, "HobbiesRoutes") || this;
    }
    HobbieRoutes.prototype.configureRoutes = function () {
        this.app
            .route("/api/hobbie")
            .get(hobbieController_1.default.listHobbies)
            .post(hobbie_middleware_1.default.validateRequiredHobbieBodyFields, hobbieController_1.default.createHobbie, error_handling_middlware_1.errorHandling);
        this.app
            .route("/api/hobbie/:id")
            .put(hobbieController_1.default.updateHobbie)
            .delete(hobbieController_1.default.deleteById)
            .get(hobbieController_1.default.getHobbie);
        // (we'll add the actual route configuration here next)
        return this.app;
    };
    return HobbieRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.HobbieRoutes = HobbieRoutes;
