// index.ts (or app.ts)
import { Sequelize } from "sequelize";
import { sequelize } from "../db/sequelize"; // Import sequelize instance
import User from "./user.model";
export { Sequelize, sequelize, User };

async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
}

syncDatabase();
