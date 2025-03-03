// sequelize.ts
import { Sequelize } from "sequelize";
import * as path from "path";

const env: string = process.env.NODE_ENV || "development";
// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any
const config: Record<string, any> = require(
  path.join(__dirname + "/config/config.json"),
)[env];

const sequelize = new Sequelize(config);

export { sequelize };
