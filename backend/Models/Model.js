import Event from "./Event.js";
import challange from "./challange.js";
import judges from "./judges.js";
import momber from "./momber.js";
import submetion from "./submetion.js";
import team from "./team_participation.js";
import participate from "./participate.js";

Event.belongsToMany(team, { through: submetion });
team.belongsToMany(judges, { through: submetion });

Event.belongsToMany(team, { through: participate });

team.hasMany(momber); //, { foreignKey: "teamid" }
momber.belongsTo(team);

judges.belongsToMany(Event, { through: "judgment" });

Event.hasMany(challange); //{ foreignKey: "eventid" }
challange.belongsTo(Event);

export { Event, challange, judges, momber, submetion, team, participate };
