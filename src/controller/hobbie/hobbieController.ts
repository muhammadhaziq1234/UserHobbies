import hobbieServices from "../../services/hobbie/hobbie.service";
import express from "express";

class hobbieController {
  async listHobbies(req: express.Request, res: express.Response) {
    try {
      console.log("List");
      const hobbies = await hobbieServices.list();
      console.log("hobbies", hobbies);
      res.status(200).send(hobbies);
    } catch (err) {
      res.status(404).send({ message: "No Record Found" });
    }
  }
  async createHobbie(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const hobbies = await hobbieServices.create(req.body);
      res.status(200).send(hobbies);
    } catch (err) {
      next(err);
    }
  }
  async deleteById(req: express.Request, res: express.Response) {
    const hobbies = await hobbieServices.deleteById(req.params.id);
    res.status(200).send(hobbies);
  }
  async getHobbie(req: express.Request, res: express.Response) {
    const hobbies = await hobbieServices.readById(req.params.id);
    res.status(200).send(hobbies);
  }
  async updateHobbie(req: express.Request, res: express.Response) {
    const hobbies = await hobbieServices.putById(req.params.id, req.body);
    res.status(200).send(hobbies);
  }
}
export default new hobbieController();
