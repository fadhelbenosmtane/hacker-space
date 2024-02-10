import Event from "./Event.js";
import challange from "./challange.js";
import judge from "./judge.js";
import momber from "./momber.js";
import submetion from "./submetion.js";
import team from "./team_participation.js";
import participate from "./participate.js";

Event.belongsToMany(team, { through: submetion });
team.belongsToMany(judge, { through: submetion });

Event.belongsToMany(team, { through: participate });

team.hasMany(momber); //, { foreignKey: "teamid" }
momber.belongsTo(team);

judge.belongsToMany(Event, { through: "judgment" });

Event.hasMany(challange); //{ foreignKey: "eventid" }
challange.belongsTo(Event);

console.log(Event.prototype);
export { Event, challange, judge, momber, submetion, team, participate };
