import express from "express";
import sequelize from "./connection/database.js";
import { create_data } from "./Controller/create_data.js";
import {
  Event,
  challange,
  judge,
  momber,
  submetion,
  team,
  participate,
} from "./Models/Model.js";

const app = express();

app.use("/", (req, res) => {
  res.json("hello");
});

sequelize.sync({ force: true }).then(() => {
  //   craete();
  create_data();
  console.log("succ");
  app.listen("2500");
});
