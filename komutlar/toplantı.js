const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async(client, message, args) => {
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
    const amongus = new Discord.MessageEmbed()
    .setAuthor('Among Us - ArdaDemr', 'https://i.resmim.net/cNUjb.png', 'https://discord.gg/RZwGEGKBct')
    .addField(`Among Us - TOPLANTI`,` ${message.author} **ACİL DURUM TOPLANTISI BAŞLATTI! MİKROFONLARI AÇINIZ.**`)
    .setColor('#f7f2f2')
    .setFooter(`ArdaDemr'e Ait Among Us Altyapısı`)
    message.channel.send(amongus)
  // ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
};    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['acil-durum'],
    permLevel: 0
}

exports.help = {
    name: 'toplantı'
}