var fs = require('fs');
const Discord = require("discord.js");
var admin = require('firebase-admin');

var db = admin.database();




module.exports = {
  name: "getplanner",
  category: "flightplan",
  description: "to check the calander",
  run: async(client,message,argumentsarebadforyourlungsandhealthjesuschrist) => {
    /*/console.log("xd")
    var obj = JSON.parse(fs.readFileSync('./././calander.json', 'utf8'));
    console.log(obj)
    var args = JSON.stringify(obj,null, " ")
message.channel.send(new Discord.RichEmbed().setTitle("Flight Planner Extracted!").setDescription(args))
/*/
         var oneref = db.ref("flights/1/Flights/1")
         var tworef = db.ref("flights/1/Flights/2")
         var threeref = db.ref("flights/1/Flights/3")
         var fourref = db.ref("flights/1/Flights/4")
         
oneref.on("value", function(snapshot) {
  message.channel.send(JSON.stringify(snapshot.val()));
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
    
    tworef.on("value", function(snapshot) {
  message.channel.send(JSON.stringify(snapshot.val()));
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
    
    threeref.on("value", function(snapshot) {
  message.channel.send(JSON.stringify(snapshot.val()));
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
    
    fourref.on("value", function(snapshot) {
  message.channel.send(JSON.stringify(snapshot.val()));
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
     
    
    
    }
}

