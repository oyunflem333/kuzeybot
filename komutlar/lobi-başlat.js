const Discord = module.require('discord.js');
const client = new Discord.Client();
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
module.exports.run = async (bot, message, args) => {
  if(!message.member.roles.cache.find(x => x.name == "CREWMATE")) return message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`Oyuna dahil değilsin.`))
    if(!message.member.voice) return message.channel.send("Seste değilsin.")
    message.guild.member(message.member.voice.channel.members.array()[Math.floor(Math.floor(Math.random() * message.member.voice.channel.members.size))].id).roles.add(message.guild.roles.cache.find(r=>r.name=="IMPOSTOR").id)
    message.channel.send('Aranızdan bir kişiyi **IMPOSTOR** yaptım.\nBunu anlamanın tek bir yolu var! **HERKES SADECE KENDİ ROLLERİNE BAKSIN**\nNot: Mikrofonlarınızı kapatın.')
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
}

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['başla'],
  permLevel: 0
};

exports.help = {
  name: 'başlat'
};