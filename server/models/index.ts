import { Sequelize } from "sequelize";
import { User } from "./definitions/User.js";
import { Product } from "./definitions/Product.js";
import { Category } from "./definitions/Category.js";

import config from "../config";

const sequelize = new Sequelize({
  host: config.DATABASE_HOST,
  database: config.DATABASE_NAME,
  dialect: "postgres",
  username: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
});

export { User, Product, Category };

export const initDB = async () => {
  try {
    await sequelize.authenticate();
    const users = await sequelize.query("SELECT * FROM users;");
    console.log(users);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
