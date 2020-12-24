
const Discord = require("discord.js");

module.exports = {
  name: "help",
  category: "flightplan",
  description: "toget help",
  run: async(client,message,argumentsarebadforyourlungsandhealthjesuschrist) => {
  message.reply("!modifyplanner | !modifyplanner [#] [day] [time] [airport] max is 4\n!getplanner | retrieves planner")  
  }
}

