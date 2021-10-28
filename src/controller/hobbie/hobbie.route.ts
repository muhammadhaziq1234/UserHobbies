import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import hobbieController from "./hobbieController";
import hobbieMiddileware from "../../middleware/hobbie.middleware";
import { errorHandling } from "../../middleware/error.handling.middlware";
export class HobbieRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "HobbiesRoutes");
  }
  configureRoutes() {
    this.app
      .route(`/api/hobbie`)
      .get(hobbieController.listHobbies)
      .post(
        hobbieMiddileware.validateRequiredHobbieBodyFields,
        hobbieController.createHobbie,
        errorHandling
      );
    this.app
      .route("/api/hobbie/:id")
      .put(hobbieController.updateHobbie)
      .delete(hobbieController.deleteById)
      .get(hobbieController.getHobbie);
    // (we'll add the actual route configuration here next)
    return this.app;
  }
}
