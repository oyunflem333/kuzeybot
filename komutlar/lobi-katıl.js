const Discord = require('discord.js');
const db = require('quick.db')
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
exports.run = async (client, message, args) => {
    if(message.guild.roles.cache.find(r=>r.name=="CREWMATE").members.size>8) return message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`Oyun lobisi dolu. En fazla 8 kişi katılabilir.`))
    let rol = message.guild.roles.cache.find(x => x.name == "CREWMATE")
    if(!rol) return message.channel.send(`Bu sunucuda **"CREWMATE"** adında bir rol olmadığı için işleminiz gerçekleştirilemiyor.`);
    let rol3 = message.guild.roles.cache.find(x => x.name == "IMPOSTOR")
    if(!rol3) return message.channel.send(`Bu sunucuda **"IMPOSTOR"** adında bir rol olmadığı için işleminiz gerçekleştirilemiyor.`);
    var role = message.guild.roles.cache.find(x2 => x2.name === "CREWMATE");
    if(db.get(`lobivar${message.guild.id}`)=="DeAktif") return message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`Mevcut bir oyun bulunmamakta. Öncelikle lobi oluşturmalısın !lobi-oluştur`))

    const amongus = new Discord.MessageEmbed()
    .setAuthor('Among Us - Oyuna Katıldın!', 'https://i.resmim.net/cNUjb.png', 'https://discord.gg/RZwGEGKBct')
    .setColor('#f7f2f2')
    message.channel.send(amongus)
    message.guild.member(message).roles.add(role);
    db.add(`kalanoyuncu${message.guild.id}`,1)
    db.push(`${message.guild.id}oyunda`,message.author.tag)
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyuna-katıl'],
  permLevel: 0
};
 
exports.help = {
  name: 'katıl'
};