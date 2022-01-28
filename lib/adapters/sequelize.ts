import SequelizeAdapter, { models } from "@next-auth/sequelize-adapter";
import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: process.env.DB_HOST!,
  dialect: "mysql",
  username: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!,
});

sequelize.sync();

export default SequelizeAdapter(sequelize, {
  models: {
    User: sequelize.define("user", {
      ...models.User,
      role: DataTypes.STRING,
    }),
  },
});
