import sequelize from "../connection/database.js";
import { DataTypes } from "sequelize";

const momber = sequelize.define(
  "Momber",
  {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
    phone: { type: DataTypes.STRING },
  },
  { createdAt: false, updatedAt: false }
);
export default momber;
