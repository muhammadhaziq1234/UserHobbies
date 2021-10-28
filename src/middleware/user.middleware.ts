import express from "express";
import userService from "../services/user/user.service";
class userMiddileware {
  async validateRequiredUserBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.body && req.body.name) {
      next();
    } else {
      console.log(req.body);
      res.status(400).send({
        error: `User Name Is Required`,
      });
    }
  }
  async validateUserExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    console.log(req.params.id);
    const user = await userService.readById(req.params.id);
    if (user) {
      next();
    } else {
      res.status(404).send({
        error: `User ${req.params.id} not found`,
      });
    }
  }
}
export default new userMiddileware();
