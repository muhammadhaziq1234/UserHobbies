import userService from "../../services/user/user.service";
import express from "express";

class userController {
  async listUsers(req: express.Request, res: express.Response) {
    try {
      const users = await userService.list(100, 0);
      res.status(200).send(users);
    } catch (err) {
      res.status(404).send({ message: "No Record Found" });
    }
  }
  async createUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const user = await userService.create(req.body);
      res.status(200).send(user);
    } catch (err) {
      next(err);
    }
  }
  async deleteById(req: express.Request, res: express.Response) {
    try {
      const users = await userService.deleteById(req.params.id);
      res.status(200).send(users);
    } catch (err) {
      res.status(404).send({ message: "Record Already Deleted" });
    }
  }
  async getUser(req: express.Request, res: express.Response) {
    try {
      const users = await userService.readById(req.params.id);
      res.status(200).send(users);
    } catch (err) {
      res.status(404).send({ message: "Record Not Found" });
    }
  }
  async updateUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      console.log(req.params.id, req.body, "Update");
      const users = await userService.putById(req.params.id, req.body);
      res.status(200).send(users);
    } catch (err) {
      next(err);
    }
  }
  async deleteUserHobbie(req: express.Request, res: express.Response) {
    try {
      const getUserHobbies = await userService.deleteUserHobbie(
        req.params.id,
        req.body.hobbieId
      );
      res.status(200).send(getUserHobbies);
    } catch (err) {
      console.log(err);
      res.status(404).send({ message: "Record Not Found" });
    }
  }
  async getUserHobbies(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const user = await userService.getUserHobbies(req.params.id);
      res.status(200).send(user);
    } catch (err) {
      next(err);
    }
  }
}
export default new userController();
