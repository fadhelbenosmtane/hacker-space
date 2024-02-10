import sequelize from "../connection/database.js";
import { DataTypes } from "sequelize";

const Event = sequelize.define(
  "Event",
  {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    type: {
      type: DataTypes.STRING,
      values: ["hackthon", "ideathon", "workshop", "talk"],
    },
    description: { type: DataTypes.STRING(1000) },
    location: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    startTime: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
    endTime: { type: DataTypes.DATEONLY },
    prize1: { type: DataTypes.INTEGER, defaultValue: 0 },
    prize2: { type: DataTypes.INTEGER, defaultValue: 0 },
    prize3: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  { createdAt: false, updatedAt: false }
);
export default Event;
