const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const app = express();

const fs = require("fs");
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("ArdaDemr Discord Bot Altyapısı");
});
app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________
client.commands = new Discord.Collection();
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
//EVENTS Yükleyici_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`ArdaDemr Discord Bot Altyapısı BOT AKTİF`);
});

client.login(process.env.TOKEN);
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı