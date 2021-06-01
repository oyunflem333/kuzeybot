const Discord = require('discord.js')
const db = require('quick.db');
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
exports.run = async(client, message, args) => {
    var ardademr = args[0];
  if(!ardademr) return message.channel.send("``Bir seçenek belirtin (ayarla - kapat)``");
  
    if (ardademr == 'ayarla' || ardademr == 'aç') {
  let ardademramongus = message.mentions.channels.first();
  if (!ardademramongus) return message.channel.send('**Bunun için bir kanal ayarlamalısın** `!amongus-kanalı ayarla #kanal`')
  let ardademramongus2 = await  db.set(`amongusardademrlog_${message.guild.id}`, message.mentions.channels.first().id)
    message.channel.send(`Among us kanalı <#${ardademramongus2}> olarak belirlendi.`)  
     
  } 

  if (ardademr == 'kapat' || ardademr == 'sıfırla') {
    
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
    
    
        db.delete(`amongusardademrlog_${message.guild.id}`)

    message.channel.send(`Among Us kanalı kapatıldı.`)
  }
};
  
  
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['au-kanalı'],
    permLevel: 5
}

exports.help = {
    name: 'amongus-kanalı'
}