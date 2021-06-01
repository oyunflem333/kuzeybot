const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

exports.run = async (client, message, args, user, text, prefix) => {
    if(db.get(`lobivar${message.guild.id}`)=="DeAktif") return message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`Oyun bulunamadı.`))
    if (talkedRecently.has(message.author.id)) {
      return message.channel.send(`${message.author} bu komutu 2 saniyede bir kullanabilirsin.`);
  } else {
  // ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
   talkedRecently.add(message.author.id);
   setTimeout(() => {
   message.delete();
   
     talkedRecently.delete(message.author.id);
   }, 2000);
  } 
  // ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
      message.channel.send('Başarılı')
      db.add(`komut${message.author.id}`,1)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['göreve-başla'],
  permLevel: 0
};
 
exports.help = {
  name: 'görevi-yap'
};