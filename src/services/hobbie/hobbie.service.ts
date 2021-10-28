import {
  BaseHobbieDTO,
  HobbieDTO,
} from "../../interfaces/hobbieInterface/hobbie.interface";
import { CRUD } from "../../common/crud.interface";
import HobbieDoe from "../../modal/hobbie/hobbie.modal";
class hobbieServices implements CRUD {
  async create(resource: BaseHobbieDTO) {
    return HobbieDoe.addHobbie(resource);
  }

  async deleteById(id: string) {
    return HobbieDoe.deleteHobbie(id);
  }

  async list() {
    return await HobbieDoe.getAllHobbies();
  }

  async readById(id: string) {
    return HobbieDoe.getHobbie(id);
  }

  async putById(id: string, resource: HobbieDTO) {
    return HobbieDoe.updateHobbie(id, resource);
  }

  async getUserByEmail(email: string) {
    return email;
    // return HobbieDoe.getUserByEmail(email);
  }
}
export default new hobbieServices();
