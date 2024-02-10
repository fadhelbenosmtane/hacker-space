import express from "express";
import sequelize from "./connection/database.js";
import {
  Event,
  challange,
  judges,
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
  //   create_data();
  console.log("succ");
  app.listen("2500");
});
