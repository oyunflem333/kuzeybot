const Discord = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
exports.run = async (client, message, args) => {
    if(db.get(`lobivar${message.guild.id}`)=="DeAktif") return message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`Oyun bulunamadı.`))
    if(!message.member.roles.cache.find(x => x.name == "IMPOSTOR")) return message.reply('sanırım yanlış oldu.')
    let ardademruser = message.mentions.users.first()
    if (talkedRecently.has(message.author.id)) {
      return message.channel.send(`${message.author} bu komutu 2 saniyede bir kullanabilirsin.`);
  } else {
  
   talkedRecently.add(message.author.id);
   setTimeout(() => {
   message.delete();
   
     talkedRecently.delete(message.author.id);
   }, 15000);
  } 
    if(!ardademruser) return message.reply('öldürmek istediğin kişiyi etiketlemelisin.')
    let ardademrau = db.fetch(`amongusardademrlog_${message.guild.id}`)
    if(!db.get(`amongusardademrlog_${message.guild.id}`)) return message.channel.send("Herhangi bir log kanalı ayarlanmamış. Ayarlayınız !amongus-kanalı ayarla #kanal")
    var ardademramongus = new Discord.MessageEmbed()
.setColor("#ffc700")
.addField(`HEYYYYY!!!!`,`${ardademruser} isimli kullanıcı öldürüldü!`, true)
.setImage(`https://i.hizliresim.com/rQjkJy.png`)
.setFooter(`ArdaDemr | Among Us Altyapısı`)
message.guild.channels.cache.get(ardademrau).send(ardademramongus) 

    message.guild.members.cache.get(ardademruser.id).setNickname(`AU | ÖLDÜRÜLDÜ`)

    var user = message.guild.member(message.mentions.users.first().id);
    var crewmate = message.guild.roles.cache.find(r=>r.name=="CREWMATE");
    var impostor = message.guild.roles.cache.find(r=>r.name=="IMPOSTOR");

    if(user.roles.cache.has(crewmate.id) && ! user.roles.cache.has(impostor.id)){
        var crewmateembed = new Discord.MessageEmbed()
        .setDescription(`Rol: Crewmate`)
        .setColor('#efff00')
        message.guild.channels.cache.get(ardademrau).send(crewmateembed) 
    }else if(user.roles.cache.has(impostor.id) && ! user.roles.cache.has(crewmate.id)){
        var impostorembed = new Discord.MessageEmbed()
        .setDescription(`Rol: Impostor`)
        .setColor('#efff00')
        message.guild.channels.cache.get(ardademrau).send(impostorembed) 
    }else if(user.roles.cache.has(crewmate.id) &&  user.roles.cache.has(impostor.id)){
        var ikisi = new Discord.MessageEmbed()
        .setDescription(`Rol: Impostor`)
        .setColor('#efff00')
        message.guild.channels.cache.get(ardademrau).send(ikisi) 
    }else{
      message.channel.send("hiç biri yok")
    }
    ardademruser.send(new Discord.MessageEmbed().setColor('#f7f2f2').setImage('https://i.resmim.net/g4r9F.png'))
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dal'],
  permLevel: 0
};
 // ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
exports.help = {
  name: 'öldür'
};