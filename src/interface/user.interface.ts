import { Optional } from "sequelize";
export interface userInterface {
  userId: number;
  email: string;
  password: string;
  role: string;
}

export type userCreationAttributes = Optional<userInterface, "userId">;
