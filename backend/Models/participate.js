import sequelize from "../connection/database.js";
import { DataTypes } from "sequelize";

const participate = sequelize.define(
  "Participate",
  {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    date_participate: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
  },
  { createdAt: false, updatedAt: false }
);
export default participate;
