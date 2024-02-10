import sequelize from "../connection/database.js";
import { DataTypes } from "sequelize";

const judge = sequelize.define(
  "Judge",
  {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    type: {
      type: DataTypes.STRING,
      values: ["hackthon", "ideathon", "workshop", "talk"],
    },
    description: { type: DataTypes.STRING },
    location: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    startTime: { type: DataTypes.TIME },
    endTime: { type: DataTypes.TIME },
  },
  { createdAt: false, updatedAt: false }
);
export default judge;
