import express from "express";
import userService from "../services/user/user.service";
class hobbieMiddileware {
  async validateRequiredHobbieBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.body) {
      if (req.body.name) {
        if (req.body.passion) {
          next();
        } else {
          res.status(400).send({
            error: `Hobbie Passion Is Required`,
          });
        }
      } else {
        res.status(400).send({
          error: `Hobbie Name Is Required`,
        });
      }
    } else {
      res.status(400).send({
        error: `Hobbie Fields Is Required`,
      });
    }
  }
  async validateHobbieExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user = "";
    // const user = await userService.readById(req.params.userId);
    if (user) {
      next();
    } else {
      res.status(404).send({
        error: `User ${req.params.userId} not found`,
      });
    }
  }
}
export default new hobbieMiddileware();
