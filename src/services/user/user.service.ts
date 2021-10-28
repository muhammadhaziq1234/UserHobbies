import {
  BaseUserDTO,
  UserDTO,
} from "../../interfaces/userInterface/user.interface";
import { CRUD } from "../../common/crud.interface";
import UsersDao from "../../modal/user/user.modal";
class userServices implements CRUD {
  async create(resource: BaseUserDTO) {
    return await UsersDao.addUser(resource);
  }

  async deleteById(id: string) {
    return await UsersDao.deleteUser(id);
  }

  async list(limit: number, page: number) {
    return await UsersDao.getAllUsers(limit, page);
  }

  async readById(id: string) {
    return await UsersDao.getUser(id);
  }

  async putById(id: string, resource: BaseUserDTO) {
    return await UsersDao.updateUser(id, resource);
  }

  async deleteUserHobbie(userId: string, hobbieId: string) {
    return await UsersDao.deleteUserHobbie(userId, hobbieId);
  }
  async getUserHobbies(userId: string) {
    return await UsersDao.getUserHobbies(userId);
  }
}
export default new userServices();
