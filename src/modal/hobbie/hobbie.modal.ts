import { BaseHobbieDTO } from "../../interfaces/hobbieInterface/hobbie.interface";
import Hobbie from "../../schema/hobbie/hobbie.schema";
class HobbieDoe {
  constructor() {
    console.log("Created new instance of HobbieDoe");
  }
  async addHobbie(hobbie: BaseHobbieDTO) {
    return await Hobbie.create(hobbie);
  }
  async getHobbie(id: string) {
    return await Hobbie.findById(id);
  }
  async getAllHobbies() {
    return await Hobbie.find();
  }
  async deleteHobbie(id: string) {
    return await Hobbie.findByIdAndDelete(id);
  }
  async updateHobbie(id: string, hobbie: BaseHobbieDTO) {
    return await Hobbie.findByIdAndUpdate(id, hobbie, {
      new: true,
      useFindAndModify: false,
    });
  }
}

export default new HobbieDoe();
