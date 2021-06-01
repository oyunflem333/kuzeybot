const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
    if(db.get(`lobivar${message.guild.id}`)=="DeAktif") return message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`Oyun zaten bitmiş.`))
    let rol = message.guild.roles.cache.find(x => x.name == "CREWMATE")
    if(!rol) return message.channel.send(`Bu sunucuda **"CREWMATE"** adında bir rol olmadığı için işleminiz gerçekleştirilemiyor.`);
    var role = message.guild.roles.cache.find(x2 => x2.name === "CREWMATE");
    var role2 = message.guild.roles.cache.find(x2 => x2.name === "IMPOSTOR");
    if(!message.member.roles.cache.find(x => x.name == "CREWMATE")) return message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`Oyunun içinde değilsin, bitiremezsin.`))
    const amongus = new Discord.MessageEmbed()
    .setAuthor('Among Us - Oyun Bitirildi', 'https://i.resmim.net/cNUjb.png', 'https://discord.gg/RZwGEGKBct')
    .setColor('#f7f2f2')
    message.channel.send(amongus)
    message.guild.members.cache.forEach(u =>  {u.roles.remove(role) })
    message.guild.members.cache.forEach(u =>  {u.roles.remove(role2) })
    db.set(`kalanoyuncu${message.guild.id}`,0)
    db.delete(`${message.guild.id}oyunda`)
    db.set(`lobivar${message.guild.id}`,"DeAktif");

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kapat'],
  permLevel: 0
};
 
exports.help = {
  name: 'bitir'
};