var fs = require('fs');
const Discord = require("discord.js");

var admin = require("firebase-admin");


var db = admin.database();


module.exports = {
  name: "modifyplanner",
  category: "flightplan",
  description: "to check the calander",
  run: async(client,message,argumentsarebadforyourlungsandhealthjesuschrist) => {
            if (message.member.roles.some(role => role.name === 'FlightPlan')) {
              var args = message.content.split(/[ ]+/)
              
              if(!args[4]){
                return message.channel.send("error did you use the correct format?\n!modifyplanner [#] [day] [time] [airport]")
                
                
              } else {
                if (args[1] >= 4){
                  message.channel.send("u cannot exceed 4 or lower than 1")
                } else {
                                  
                var num = args[1]
                var day = args[2]
                var time = args[3]
                var airport = args[4]
                
                var ref = db.ref("flights/1");
                
                if (num === "1") {
                  console.log("he chose " + num)
                  var userRef = ref.child("Flights")
                  
                  userRef.update({
  1: {
    Airport: airport,
    Day: day,
    Time: time
  }
                    });
                  
                }
                
                                if (num === "2") {
                  console.log("he chose " + num)
                  var userRef = ref.child("Flights")
                  
                  userRef.update({
  2: {
    Airport: airport,
    Day: day,
    Time: time
  }
                    });
                  
                }
                
                                if (num === "3") {
                  console.log("he chose " + num)
                  var userRef = ref.child("Flights")
                  
                  userRef.update({
  3: {
    Airport: airport,
    Day: day,
    Time: time
  }
                    });
                  
                }
                
                                if (num === "4") {
                  console.log("he chose " + num)
                  var userRef = ref.child("Flights")
                  
                  userRef.update({
  4: {
    Airport: airport,
    Day: day,
    Time: time
  }
                    });
                  
                }
                
                
                
                message.channel.send("# " + num + " " + "day: " + day + " time: " + time + " airport: " + airport + " has successfully been updated")
                
                }
              
              }
        
        } else {
          
          return message.reply("you dont have sufficient perms")
          
        }
    }
}

