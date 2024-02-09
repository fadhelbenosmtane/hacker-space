import sequelize from "../connection/database.js";
import { DataTypes } from "sequelize";

const challange = sequelize.define(
  "Challange",
  {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
  },
  { createdAt: false, updatedAt: false }
);
export default challange;
