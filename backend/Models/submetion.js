import sequelize from "../connection/database.js";
import { DataTypes } from "sequelize";

const submetion = sequelize.define(
  "Submetion",
  {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    note_project: { type: DataTypes.INTEGER },
    date_participate: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
    feedback: { type: DataTypes.STRING },
  },
  { createdAt: false, updatedAt: false }
);
export default submetion;
