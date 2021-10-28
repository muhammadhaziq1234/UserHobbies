import { IHobbie } from "../../schema/hobbie/hobbie.schema";
export interface BaseUserDTO {
  name: string;
  hobbieId: IHobbie;
}

export interface UserDTO extends BaseUserDTO {
  id: string;
}
