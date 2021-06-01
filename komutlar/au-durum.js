const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
exports.run = async(client, message, args) => {
    if(db.get(`lobivar${message.guild.id}`)=="DeAktif") return message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`Oyun bulunamadı.`))

    let ardademrkalanoyuncu = db.fetch(`kalanoyuncu${message.guild.id}`)
    if (ardademrkalanoyuncu === null) ardademrkalanoyuncu = 0;
    let ardademroyunda = db.get(`${message.guild.id}oyunda`) || "Oyunda Olan Herhangi Bir Oyuncu Yok!"
    message.channel.send(new Discord.MessageEmbed().setColor('#f7f2f2').setAuthor('Among Us - Oyun Durumu', 'https://i.resmim.net/cNUjb.png', 'https://discord.gg/RZwGEGKBct').setDescription(`**Yaşayan Kişi Sayısı:** ${ardademrkalanoyuncu}\n**Oyuncular:** ${ardademroyunda}`))

// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı

}
exports.conf = {
     enabled: true,
     guildOnly: true,
     aliases: ["oyundurumu"],
     permLevel: 0
      };
      
exports.help = {
       name: "durum"
      };