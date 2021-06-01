const Discord = require('discord.js');
const db = require('quick.db')
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
exports.run = async (client, message, args) => {
    let rol = message.guild.roles.cache.find(x => x.name == "CREWMATE")
    if(!rol) return message.channel.send(`Bu sunucuda **"CREWMATE"** adında bir rol olmadığı için işleminiz gerçekleştirilemiyor.`);
    let rol3 = message.guild.roles.cache.find(x => x.name == "IMPOSTOR")
    if(!rol3) return message.channel.send(`Bu sunucuda **"IMPOSTOR"** adında bir rol olmadığı için işleminiz gerçekleştirilemiyor.`);
    var role = message.guild.roles.cache.find(x2 => x2.name === "CREWMATE");
    if(db.get(`lobivar${message.guild.id}`)=="Aktif") return message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`Zaten mevcut bir lobi var. Oyunun bitmesini bekle.`))
    const amongus = new Discord.MessageEmbed()
    .setAuthor('Among Us - Lobi Oluşturuldu', 'https://i.resmim.net/cNUjb.png', 'https://discord.gg/RZwGEGKBct')
    .setColor('#f7f2f2')
    message.channel.send(amongus)
    message.guild.member(message).roles.add(role);
    db.add(`kalanoyuncu${message.guild.id}`,1)
    db.set(`lobivar${message.guild.id}`,"Aktif");
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lobi-kur'],
  permLevel: 0
};
 
exports.help = {
  name: 'lobi-oluştur'
};