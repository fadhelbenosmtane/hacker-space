import sequelize from "../connection/database.js";
import { DataTypes } from "sequelize";

const team = sequelize.define(
  "Team",
  {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
  },
  { createdAt: false, updatedAt: false }
);
export default team;
