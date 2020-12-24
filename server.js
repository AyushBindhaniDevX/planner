const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
  disableEveryone: true
});

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-anz.firebaseio.com"
});

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes.js")(app);

var server = app.listen(3000, function() {
  console.log("Listening on port %s", server.address().port);
});

// Collections
client.commands = new Collection();
client.aliases = new Collection();

config({
  path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {
  const prefix = "!";

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  // If a command is finally found, run the command
  if (command) command.run(client, message, args);
});

// WELCOME MESSAGe


client.login(process.env.TOKEN);