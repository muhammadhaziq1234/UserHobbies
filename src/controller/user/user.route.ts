import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import userController from "./userController";
import userMiddleware from "../../middleware/user.middleware";
import { errorHandling } from "../../middleware/error.handling.middlware";
export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }
  configureRoutes() {
    this.app
      .route(`/api/users`)
      .get(userController.listUsers)
      .post(
        userMiddleware.validateRequiredUserBodyFields,
        userController.createUser,
        errorHandling
      );
    this.app
      .route("/api/users/:id")
      .put(
        userMiddleware.validateUserExists,
        userController.updateUser,
        errorHandling
      )
      .delete(userController.deleteById)
      .get(userController.getUser);
    this.app
      .route("/api/userHobbies/:id")
      .get(userController.getUserHobbies, errorHandling)
      .put(userMiddleware.validateUserExists, userController.deleteUserHobbie);
    // (we'll add the actual route configuration here next)
    return this.app;
  }
}
