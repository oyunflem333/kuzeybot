const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();

exports.run = async(client, message, args) => {
    if(db.get(`lobivar${message.guild.id}`)=="DeAktif") return message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`Oyun bulunamadı.`))
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
    let ardademrkomut = db.fetch(`komut${message.author.id}`) 
    if (ardademrkomut === null) ardademrkomut = 0;

    message.channel.send(new Discord.MessageEmbed().setColor('#f7f2f2').setAuthor('Among Us - Durumun', 'https://i.resmim.net/cNUjb.png', 'https://discord.gg/RZwGEGKBct').setDescription(`**Görev**\nKullanılması gereken komut sayısı: 20\nKullanılan komut sayısı: **${ardademrkomut}**`))
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı


}
exports.conf = {
     enabled: true,
     guildOnly: true,
     aliases: ["durumum"],
     permLevel: 0
      };
      
exports.help = {
       name: "profil"
      };