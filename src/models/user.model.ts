import { sequelize } from "../db/sequelize";
import {
  userCreationAttributes,
  userInterface,
} from "../interface/user.interface";
import { Model, DataTypes } from "sequelize";

class User
  extends Model<userInterface, userCreationAttributes>
  implements userInterface
{
  userId!: number;
  email!: string;
  password!: string;
  role!: string;
}

User.init(
  {
    userId: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    email: { allowNull: false, type: DataTypes.STRING },
    password: { allowNull: false, type: DataTypes.STRING },
    role: {
      allowNull: false,
      type: DataTypes.ENUM("admin", "customer"),
      defaultValue: "customer",
    },
  },
  {
    sequelize,
    // timestamps: false,
    modelName: "User",
  }
);
export default User;
