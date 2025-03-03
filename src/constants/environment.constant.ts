import * as dotenv from "dotenv";

dotenv.config();

const environmentConfig = Object.freeze({
  NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : "development",
  PORT: process.env.PORT ? process.env.PORT : "3001",
  JWT_SECRET: process.env.JWT_SECRET ? process.env.JWT_SECRET : "secret123",
  TOCKEN_SECRET: process.env.TOKEN_SECRET
    ? process.env.TOKEN_SECRET
    : "tokensecret123",
  APP_URL: process.env.APP_URL ? process.env.APP_URL : "http://localhost:5173",
  EMAIL_HOST: process.env.EMAIL_HOST ? process.env.EMAIL_HOST : "",
  EMAIL_USERNAME: process.env.EMAIL_USERNAME
    ? process.env.EMAIL_USERNAME
    : "meet",
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
    ? process.env.EMAIL_PASSWORD
    : "pwd",
  EMAIL_PORT: process.env.EMAIL_PORT ? process.env.EMAIL_PORT : "587",
});
export default environmentConfig;
