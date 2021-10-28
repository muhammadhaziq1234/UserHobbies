import {
  BaseUserDTO,
  UserDTO,
} from "../../interfaces/userInterface/user.interface";
import User from "../../schema/user/user.schema";
class UsersDao {
  constructor() {
    console.log("Created new instance of UsersDao");
  }
  async addUser(user: BaseUserDTO) {
    return await User.create(user);
  }
  async getUser(id: string) {
    return await User.findById({ _id: id });
  }
  async getAllUsers(limit: number, page: number) {
    return await User.find().populate("hobbies");
  }
  async deleteUser(id: string) {
    return await User.findOneAndDelete({ _id: id });
  }
  async updateUser(id: string, user: BaseUserDTO) {
    return await User.findByIdAndUpdate(
      id,
      {
        name: user.name,
        $push: { hobbies: user.hobbieId },
      },
      { new: true, upsert: true }
    );
  }
  async deleteUserHobbie(userId: string, hobbieId: string) {
    return await User.findByIdAndUpdate(
      userId,
      {
        $pull: { hobbies: hobbieId },
      },
      { multi: true, new: true }
    );
  }
  async getUserHobbies(userId: string) {
    return await User.findOne({ _id: userId }).populate("hobbies");
  }
}

export default new UsersDao();
